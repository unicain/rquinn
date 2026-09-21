// Fonte única de contato — usada em todos os CTAs da LP.
// Trocar aqui reflete em todo o site de uma vez.

export const WHATSAPP_NUMBER = "5511983479398"; // formato internacional, sem espaços/símbolos

export const GOOGLE_MAPS_URL =
  "https://share.google/DUGp4dsIOl97o1qjJ";

export const INSTAGRAM_URL = "https://www.instagram.com/dr.robertaquinn/";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
