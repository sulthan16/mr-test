import Header from "../../../components/Header";
import Channel from "../../../components/Channel";
function Section4() {
  const items = [
    {
      title: "Google",
    },
    {
      title: "Dribble",
    },
    {
      title: "Microsoft",
    },
    {
      title: "Behance",
    },
    {
      title: "Weather Channel",
    },
    {
      title: "Gurus",
    },
    {
      title: "iMedia",
    },
    {
      title: "Creativeye",
    },
    {
      title: "Khan Studios",
    },
    {
      title: "Yahoo",
    },
  ];
  return (
    <section id="section-4">
      <div className="w-full flex flex-wrap">
        <Header title="Channels" linkTitle="Browse all channels" />
      </div>
      <div className="w-full flex flex-wrap px-5 pt-5">
        {items.map((data) => (
          <div className="w-1/2 px-2 mb-3">
            <Channel title={data.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section4;
