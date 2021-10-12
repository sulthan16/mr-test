import Environment from "../../components/Environment";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
export default function Home() {
  return (
    <Environment>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-3/5 pt-24">
          <Section1 />
        </div>
        <div className="w-full md:w-2/5 pt-24">
          <Section2 />
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-3/5  pt-48">
          <Section3 />
          <Section5 />
        </div>
        <div className="w-full md:w-2/5  pt-48">
          <Section4 />
        </div>
      </div>
    </Environment>
  );
}
