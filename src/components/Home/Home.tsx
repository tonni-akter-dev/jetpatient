import Banner from "@/components/Banner";
import Clinics from "@/components/Clinics";
import Newslater from "@/components/Newslater";
import Procedures from "@/components/Procedures";
import AllDestination from "../AllDestination";
import Local from "../Local";


export default function Home() {
  return (
    <main className="">
      <Banner />
      <Procedures />
      <Clinics />
      <AllDestination />
      <Local />
      <Newslater />
    </main>
  );
}
