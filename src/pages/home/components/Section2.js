import Header from "../../../components/Header";

import Item from "../../../components/Item";
function Section1() {
  const items = [
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/150x150.png",
      author: "michele half",
      description: "how to become a expert",
      times: "1 hour ago",
    },
  ];
  return (
    <section id="section-2">
      <div className="w-full flex flex-wrap flex-col">
        <Header title="Activity" linkTitle="View timeline /Filter activities" />
        <div className="w-full px-5 pt-5 pb-5 border-b-2 primary-border">
          <ul
            className="space-y-4 overflow-x-hidden overflow-y-scroll"
            style={{ maxHeight: 475 }}
          >
            {items.map((data) => (
              <li>
                {/* <div class="w-full h-3 primary-background"></div> */}
                <Item data={data} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section1;
