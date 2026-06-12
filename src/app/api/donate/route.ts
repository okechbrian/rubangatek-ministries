import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "UGX", donorName, donorEmail } = await request.json();

    if (!amount || typeof amount !== "number" || amount < 1000) {
      return NextResponse.json(
        { success: false, error: "Minimum donation is 1,000 UGX" },
        { status: 400 }
      );
    }

    const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Online payments are not configured yet. Please use bank transfer or mobile money.",
          configRequired: true,
        },
        { status: 503 }
      );
    }

    const txRef = `RUB-${Date.now()}-${randomUUID().slice(0, 8)}`;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const payload = {
      tx_ref: txRef,
      amount,
      currency,
      redirect_url: `${baseUrl}/donate/success`,
      customer: {
        email: donorEmail || "donor@example.com",
        name: donorName || "Anonymous Donor",
      },
      customizations: {
        title: "Rubangatek Ministries",
        description: "Donation to support vulnerable elderly and children",
        logo: `${baseUrl}/icon.svg`,
      },
      meta: {
        source: "rubangatek_website",
      },
    };

    const response = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.status === "success" && result.data?.link) {
      return NextResponse.json({
        success: true,
        paymentLink: result.data.link,
        txRef,
      });
    }

    console.error("Flutterwave error:", result);
    return NextResponse.json(
      { success: false, error: "Payment initialization failed. Please try again." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Donate API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
