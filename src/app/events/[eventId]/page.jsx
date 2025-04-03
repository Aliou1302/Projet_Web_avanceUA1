"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

const PageEventDetails = ({ params }) => {
  const eventId = params.eventId; 
  const [event, setEvent] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const t = useTranslations(); 
  const PageEventDetails = t.raw("Events");

  // Fonction pour récupérer les données de l'événement
  async function getEvent(id) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events/${id}`,
        {
          cache: "no-store", // Toujours obtenir les données les plus récentes
        }
      );

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération de l'événement:", error);
      throw error;
    }
  }

  // Utiliser useEffect pour appeler l'API lorsque le composant est monté
  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await getEvent(eventId);
        if (!data) {
          notFound(); // Rediriger si l'événement n'existe pas
        } else {
          setEvent(data); // Mettre à jour l'état avec les données de l'événement
        }
      } catch (err) {
        setError(err.message); // Gérer les erreurs
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    }

    fetchEvent();
  }, [eventId]);

  // Afficher un état de chargement
  if (loading) {
    return <p>{PageEventDetails["loading"]}</p>;
  }

  // Afficher un message d'erreur si une erreur s'est produite
  if (error) {
    return <p>Erreur : {error}</p>;
  }

  // Rendu du composant si les données de l'événement sont disponibles
  return (
    <div className="flex flex-col gap-10 p-2 my-[5rem]">
      <div className="relative mx-auto w-full max-w-[500px] aspect-video">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 500px"
        />
      </div>
      <h1 className="text-center text-sm md:text-2xl font-bold sm:font-extrabold">
        {event.title}
      </h1>
      <h2 className="text-center">{event.date}</h2>
      <h3 className="text-center">{event.time}</h3>
      <p className="text-center text-base">{event.description}</p>
    </div>
  );
};

export default PageEventDetails;
