import HomeMenu from "@/components/homeMenu/HomeMenu";
import Introduction from "@/components/introduction/Introduction";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <Introduction />
      <HomeMenu />
    </div>
  );
}
