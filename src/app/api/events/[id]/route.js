import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

// GET methode pour recuperer un evenement par son id
export async function GET(request, { params }) {
  const paramsData = await params;
  const id = paramsData.id;

  try {
    const cookieStore = await cookies();
    const language = cookieStore.get("language")?.value || "fr";
    const eventModel = language === "fr" ? "event" : "eventEn";
    const event = await prisma[eventModel].findUnique({
      where: { id: Number(id) },
    });

    if (!event) {
      return Response.json(
        { message: "Événement non trouvé" },
        { status: 404 }
      );
    }
    
    return Response.json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    return Response.json({ error: "Failed to fetch event" }, { status: 500 });
  }
}

// PUT methode pour mettre à jour un evenement
export async function PUT(request, { params }) {
  const paramsData = await params;
  const id = paramsData.id;

  try {
    const data = await request.json();
    const { image, title, date, time, description } = data;

    if (!image || !title || !date || !time || !description) {
      const errorMessage = "Tous les champs sont requis";
      return Response.json({ message: errorMessage }, { status: 400 });
    }

    const cookieStore = await cookies();
    const language = cookieStore.get("language")?.value || "fr";
    const eventModel = language === "fr" ? "event" : "eventEn";

    const updatedEvent = await prisma[eventModel].update({
      where: { id: Number(id) },
      data,
    });

    return Response.json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    if (error.code === "P2025") {
      return Response.json({ error: "Event not found" }, { status: 404 });
    }
    return Response.json({ error: "Failed to update event" }, { status: 500 });
  }
}

// DELETE methode pour supprimer un evenement
export async function DELETE(request, { params }) {
  const paramsData = await params;
  const id = paramsData.id;

  try {
    const cookieStore = await cookies();
    const language = cookieStore.get("language")?.value || "fr";
    const eventModel = language === "fr" ? "event" : "eventEn";
    await prisma[eventModel].delete({
      where: { id: Number(id) },
    });

    return Response.json({ message: "Événement supprimé" });
  } catch (error) {
    console.error("Error deleting event:", error);
    if (error.code === "P2025") {
      return Response.json({ error: "Event not found" }, { status: 404 });
    }
    return Response.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
