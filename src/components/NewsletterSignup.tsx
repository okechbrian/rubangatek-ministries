"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email,
          message: "Newsletter signup request — please add this email to the mailing list.",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage("You're subscribed! Thank you.");
      } else {
        setStatus("error");
        setMessage(data.errors?.[0] || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-secondary/70 bg-white text-text-primary placeholder:text-text-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {message && (
        <p className={`text-xs mt-1 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
