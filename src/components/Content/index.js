export default function Content(props) {
  const { title, subtitle, views, isParent, className } = props;
  return (
    <div
      className={`container ${
        isParent ? "h-80 md:h-full" : "h-80 md:h-40"
      } primary-background relative ${className}`}
    >
      <div className="w-full absolute left-0 bottom-0">
        <div
          className={`w-full flex flex-wrap flex-col px-1 ${
            isParent && "md:px-5"
          }`}
        >
          {
            <h1
              className={`${
                !isParent && "md:hidden"
              } text-4xl my-4 font-bold leading-tight`}
            >
              {title}
            </h1>
          }
          <div className="flex flex-wrap">
            <p
              className={`w-1/2 text-xs ${
                isParent ? "my-4" : "mt-4"
              } font-bold leading-tight`}
            >
              {subtitle}
            </p>
            <span
              className={`w-1/2 md:text-right text-xs ${
                isParent ? "my-4" : "mt-4"
              }`}
            >
              {views} views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
