export async function sendEmailToUser(to: string) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to,
      subject: "Violation report test",
      html: "<p>This is a test email sent to report violation data</p>",
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to send email");
  }

  return res.json();
}
