"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { sendEmailToUser } from "../../lib/emailClient";

export default function SendEmailPage() {
  const { user } = useUser();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const email = user?.emailAddresses[0]?.emailAddress;

    if (!email) {
      setStatus("Error: No email found for user. Please Sign in");
      return;
    }

    try {
      await sendEmailToUser(email);
      setStatus("Email sent successfully!");
    } catch (err) {
      console.error(err);
      setStatus("Error: Failed to send email.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Send Email</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <button
          type="submit"
          className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700 transition-colors"
        >
          Send test email to - {user?.emailAddresses[0]?.emailAddress || "user"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
    </div>
  );
}
