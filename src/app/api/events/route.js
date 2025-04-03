import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

// Metadonnées de la page
export const metadata = {
  title: "Events | FitSpace Yoga & Pilates",
  description:
    "Discover upcoming yoga and pilates events at FitSpace. Join our sessions guided by passionate instructors.",
  openGraph: {
    title: "Yoga & Pilates Events - FitSpace",
    description:
      "Browse all upcoming yoga and pilates events at FitSpace studio.",
  },
};

// GET pour recuperer tous les evenements
export async function GET(request) {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "fr";
  const eventModel = language === "fr" ? "event" : "eventEn";
  const events = await prisma[eventModel].findMany();
  return Response.json(events);
}

// POST pour mettre en ligne un evenement
export async function POST(request) {
  const body = await request.json();
  const { image, title, date, time, description } = body;

  if (!image || !title || !date || !time || !description) {
    const errorMessage = "Tous les champs sont requis";
    return Response.json({ message: errorMessage }, { status: 400 });
  }

  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value || "fr";
  const eventModel = language === "fr" ? "event" : "eventEn";

  const newEvent = await prisma[eventModel].create({
    data: { image, title, date, time, description },
  });

  return Response.json(newEvent, { status: 201 });
}
