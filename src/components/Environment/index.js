import Header from "./Header";
import Footer from "./Footer";

export default function Environment(props) {
  return (
    <div className="leading-normal tracking-normal">
      <Header />
      <div className="mt-12 md:mt-24">{props.children}</div>
      <Footer />
    </div>
  );
}
