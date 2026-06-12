"use client";

import { useState, FormEvent } from "react";

const presetAmounts = [10000, 25000, 50000, 100000, 250000, 500000];

function formatUGX(n: number) {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DonateWidget() {
  const [amount, setAmount] = useState<number>(50000);
  const [customAmount, setCustomAmount] = useState("");
  const [customMode, setCustomMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function selectPreset(value: number) {
    setCustomMode(false);
    setAmount(value);
    setCustomAmount("");
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "");
    setCustomAmount(val);
    if (val) setAmount(Number(val));
    else setAmount(0);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!amount || amount < 1000) {
      setError("Minimum donation is 1,000 UGX");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "UGX",
          donorName: name || undefined,
          donorEmail: email || undefined,
        }),
      });

      const data = await res.json();

      if (data.success && data.paymentLink) {
        window.location.href = data.paymentLink;
        return;
      }

      if (data.configRequired) {
        setError("Online payments are not yet active. Please use the bank or mobile money options below.");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const activeAmount = customMode ? (customAmount ? Number(customAmount) : 0) : amount;

  return (
    <div className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden">
      <div className="bg-accent px-6 py-4">
        <h2 className="font-heading font-bold text-white text-xl">
          Donate Online
        </h2>
        <p className="text-white/80 text-sm mt-1">
          Secure payment via card or mobile money
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-3">
            Choose Amount (UGX)
          </label>
          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => selectPreset(a)}
                className={`px-3 py-2.5 rounded-lg text-sm font-bold border-2 transition-all ${
                  !customMode && amount === a
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-secondary/50 text-text-muted hover:border-primary/30 hover:text-text-primary"
                }`}
              >
                {formatUGX(a)}
              </button>
            ))}
          </div>
          <div className="mt-2">
            <button
              type="button"
              onClick={() => {
                setCustomMode(true);
                setAmount(0);
              }}
              className={`px-3 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
                customMode
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-secondary/50 text-text-muted hover:border-primary/30 hover:text-text-primary"
              }`}
            >
              Custom
            </button>
          </div>
          {customMode && (
            <div className="mt-3">
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={handleCustomChange}
                placeholder="Enter amount in UGX"
                className="w-full px-4 py-2.5 rounded-lg border border-secondary/70 bg-white text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
          )}
          {activeAmount > 0 && (
            <p className="mt-2 text-xs text-text-muted">
              Donating: <strong className="text-primary">{formatUGX(activeAmount)}</strong>
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="donor-name" className="block text-sm font-semibold text-text-primary mb-1">
              Your Name <span className="text-text-muted/50">(optional)</span>
            </label>
            <input
              id="donor-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-secondary/70 bg-white text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="donor-email" className="block text-sm font-semibold text-text-primary mb-1">
              Email <span className="text-text-muted/50">(optional)</span>
            </label>
            <input
              id="donor-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-secondary/70 bg-white text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm" role="alert">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || activeAmount < 1000}
          className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg text-base hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-sm"
        >
          {loading ? "Processing..." : `Donate ${activeAmount >= 1000 ? formatUGX(activeAmount) : ""}`}
        </button>

        <p className="text-xs text-text-muted/60 text-center">
          Secure payments processed by Flutterwave. Your information is encrypted.
        </p>
      </form>
    </div>
  );
}
