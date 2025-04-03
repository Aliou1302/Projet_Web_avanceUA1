"use server";
import { cookies } from "next/headers";

// Fonction pour définir la valeur de la langue dans le cookie
export default async function setLanguageValue(value) {
  const cookieStore = await cookies();
  cookieStore.set("language", value);
}
