"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card/Card";
import styles from "./Page.module.css";
import { useTranslations } from "next-intl";

const PageEvents = () => {
  const t = useTranslations();
  const PageEvents = t.raw("Events");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les événements
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
        console.error("Erreur lors de la récupération des événements:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="text-center my-8 text-xl">{PageEvents["loading"]}</div>
    );
  if (error)
    return (
      <div className="text-center my-8 text-xl text-red-500">
        Erreur: {error}
      </div>
    );

  return (
    <div>
      {events.length === 0 ? (
        <div className="text-center my-8 text-xl">{PageEvents["noEvents"]}</div>
      ) : (
        <div className={styles.cardContainer}>
          {events.map((event) => (
            <Card
              key={event.id}
              id={event.id}
              image={event.image}
              title={event.title}
              linkable={true}
              styles={styles}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PageEvents;
