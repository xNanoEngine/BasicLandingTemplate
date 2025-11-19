import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const sendContactEmail = async (
  nombre: string,
  email: string,
  mensaje: string,
) => {
  if (!email.includes("@")) {
    throw new Error("Email inválido");
  }

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "tucorreo@gmail.com",
    subject: `Contacto de ${nombre}`,
    html: `<p>${mensaje}</p>`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
