import Content from "../../../components/Content";
import Header from "../../../components/Header";

function Section1() {
  return (
    <section id="section-1">
      <div className="w-full flex flex-wrap flex-row">
        <Header title="Videos" linkTitle="Browse all videos" />
        <div className="w-full md:w-[66%] px-5 md:pl-5 md:pr-1 pt-5">
          <Content
            title="How to Improve your Skills"
            subtitle="Waseem Arshad"
            className="w-full"
            views="18.0000"
            isParent
          />
        </div>
        <div className="w-full md:w-[34%] px-5 md:pl-1 md:pr-5 pt-5">
          <Content
            title="How to Improve your Skills"
            subtitle="Michele Chilf"
            className="mb-2 w-full"
            views="1800"
          />
          <Content
            title="How to Improve your Skills"
            subtitle="Ahmed Yasin"
            className="w-full"
            views="1800"
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

export default Section1;
