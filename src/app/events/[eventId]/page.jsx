import React from "react";
import eventsData from "@/data/eventsData.json"; // Importer les événements

const PageEventDetails = async ({ params }) => {
  const eventId = params.eventId;

  // Convertir eventId en nombre et chercher l'événement
  const event = eventsData.find((e) => e.id === parseInt(eventId));

  // Si l'événement n'existe pas, afficher un message
  if (!event) {
    return <p>Événement non trouvé !</p>;
  }

  return (
    <div className="flex flex-col gap-10 p-2">
      <img
        src={event.image}
        alt={event.title}
        className="mx-auto object-cover sm:w-[500px]"
      />
      <h1 className="text-center font-[0.4rem] font-bold sm:font-[1.5rem] font-extrabold">
        {event.title}
      </h1>
      <h2 className="text-center">{event.date}</h2>
      <h3 className="text-center">{event.time}</h3>
      <p className="text-center font-[1.2rem]">{event.description}</p>
    </div>
  );
};

export default PageEventDetails;
