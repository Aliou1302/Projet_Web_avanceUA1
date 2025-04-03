import React from "react";
import Card from "../card/Card";
import styles from "./HomeMenu.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const HomeMenu = () => {
  const t = useTranslations();
  const homeMenuData = t.raw("homeMenuData");
  const Events = t.raw("Events");

  return (
    <div className="flex flex-col items-center justify-center space-y-[8rem] mb-[10rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {homeMenuData.map(({ id, image, title }) => (
          <Card
            key={id}
            image={image}
            title={title}
            linkable={false}
            styles={styles}
          />
        ))}
      </div>
      <Link
        href="/events"
        className="bg-[#7B9EE8] hover:bg-[#6A8DCB] text-white font-bold py-3 px-4"
      >
        {Events["viewAll"]}
      </Link>
    </div>
  );
};

export default HomeMenu;
