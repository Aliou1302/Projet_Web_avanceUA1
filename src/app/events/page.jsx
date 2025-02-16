import React from "react";
import Card from "@/components/card/Card";
import eventsData from "@/data/eventsData.json";

const PageEvents = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 justify-items-center p-2 w-full sm:w-3/4 mx-auto">
        {eventsData.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            image={event.image}
            title={event.title}
          />
        ))}
      </div>
    </>
  );
};

export default PageEvents;
