import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Item({ data }) {
  return (
    <article className="group flex space-x-4 border-indigo-500 hover:border-yellow-800 cursor-pointer primary-text">
      <img
        src={data.image ?? ""}
        alt=""
        className="flex-none w-18 h-18 object-cover bg-gray-100 group-hover:border-yellow-800"
        width="100"
        height="50"
      />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold primary-text mb-0.5">
          {data.author ?? "-"}
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div className="inline">{`${data.description ?? "-"}`}</div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dt className="inline">
              <FontAwesomeIcon icon={faClock} />
            </dt>
            &nbsp;
            <dd className="inline primary-text">{data.times ?? "-"}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
