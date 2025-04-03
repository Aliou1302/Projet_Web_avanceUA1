import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Effacer les données existantes
  await prisma.event.deleteMany();

  // Insérer les événements que vous avez fournis
  await prisma.event.createMany({
    data: [
      {
        image: "/assets/evenementYoga1.jpg",
        title: "Yoga en salle",
        date: "28 Février",
        time: "14h-18h",
        description: "Exercices de yoga pratiqués dans une salle de sport",
      },
      {
        image: "/assets/evenementYoga2.jpg",
        title: "Yoga en extérieur",
        date: "3 Mars",
        time: "9h-11h",
        description: "Exercices de yoga pratiqués dans un parc",
      },
      {
        image: "/assets/evenementPilate1.jpg",
        title: "Pilate en salle",
        date: "6 Mars",
        time: "14h-18h",
        description: "Exercices de pilate pratiqués dans une salle de sport",
      },
      {
        image: "/assets/evenementPilate2.jpg",
        title: "Pilate en extérieur",
        date: "12 Mars",
        time: "9h-11h",
        description: "Exercices de pilate pratiqués dans un parc",
      },
    ],
  });

  // Effacer les données existantes pour les événements en anglais
  await prisma.eventEn.deleteMany();

  // Inserter les événements en anglais
  await prisma.eventEn.createMany({
    data: [
      {
        image: "/assets/evenementYoga1.jpg",
        title: "Indoor Yoga",
        date: "February 28",
        time: "2 PM - 6 PM",
        description: "Yoga exercises practiced in a gym",
      },
      {
        image: "/assets/evenementYoga2.jpg",
        title: "Outdoor Yoga",
        date: "March 3",
        time: "9 AM - 11 AM",
        description: "Yoga exercises practiced in a park",
      },
      {
        image: "/assets/evenementPilate1.jpg",
        title: "Indoor Pilates",
        date: "March 6",
        time: "2 PM - 6 PM",
        description: "Pilates exercises practiced in a gym",
      },
      {
        image: "/assets/evenementPilate2.jpg",
        title: "Outdoor Pilates",
        date: "March 12",
        time: "9 AM - 11 AM",
        description: "Pilates exercises practiced in a park",
      },
    ],
  });

  console.log("Database has been seeded with yoga and pilates events!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
