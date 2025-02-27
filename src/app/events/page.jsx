import React from "react";
import Card from "@/components/card/Card";
import eventsData from "@/data/eventsData.json";
import styles from "./Page.module.css"

const PageEvents = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        {eventsData.map((event) => (
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
    </>
  );
};

export default PageEvents;
