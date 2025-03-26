import React from "react";
// Fonction qui va chercher l’événement depuis l’API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchEvent(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

// Composant de page
const PageEventDetail = async ({ params }) => {
  const { eventId } = await params;
  const event = await fetchEvent(eventId);

  if (!event) {
    return <p className={styles.notFound}>Événement non trouvé !</p>;
  }

  return (
    <div className="flex flex-col gap-10 p-2 my-[5rem]">
      <img
        src={event.image}
        alt={event.title}
        className="mx-auto object-cover sm:w-[500px]"
      />
      <h1 className="text-center text-2xl font-bold">{event.title}</h1>
      <h2 className="text-center">{event.date}</h2>
      <h3 className="text-center">{event.time}</h3>
      <p className="text-center text-lg">{event.description}</p>
    </div>
  );
};

export default PageEventDetail;
