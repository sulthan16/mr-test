import Content from "../../../components/Content";
import Header from "../../../components/Header";

function Section3() {
  return (
    <section id="section-3" className=" mt-10">
      <div className="w-full flex flex-wrap">
        <Header title="Document" linkTitle="Brows all documents" />
        <div className="w-full md:w-[66%] px-5 md:pl-5 md:pr-1 pt-5">
          <Content
            title="Waseem Arshad"
            subtitle="User Interface Designer"
            views="18.0000"
            isParent
          />
        </div>
        <div className="w-full md:w-[34%] px-5 md:pl-1 md:pr-5 pt-5">
          <Content
            title="How to Improve your Skills"
            subtitle="Michele Chilf"
            className="mb-2"
            views="18.0000"
          />
          <Content
            title="How to Improve your Skills"
            subtitle="Ahmed Yasin"
            views="18.0000"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 px-5">
        <div className="mt-2 w-full">
          <Content
            title="How to Improve your Skills"
            subtitle="Michele Chilfs"
            views="1800"
          />
        </div>
        <div className="mt-2 w-full">
          <Content
            title="How to Improve your Skills"
            subtitle="Michele Chilfs"
            views="1800"
          />
        </div>
        <div className="mt-2 w-full">
          <Content
            title="How to Improve your Skills"
            subtitle="Michele Chilfs"
            views="1800"
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
