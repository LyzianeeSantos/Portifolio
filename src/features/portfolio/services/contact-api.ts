import type { ContactFormValues } from "@/schemas/forms";

export async function submitContactMessage(values: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar a mensagem.");
  }

  return (await response.json()) as { ok: true };
}
