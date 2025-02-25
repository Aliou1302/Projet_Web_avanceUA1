import PageEvents from "./events/page";
import Myheader from "@/components/header/Myheader";
import HomeMenu from "@/components/homeMenu/HomeMenu";

export default function Home() {
  return (
    <div>
      <Myheader />
      <HomeMenu />
      <PageEvents />
    </div>
  );
}
