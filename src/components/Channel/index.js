export default function Channel(props) {
  const { title } = props;
  return (
    <div className={`container h-80 md:h-40 primary-background relative `}>
      <div className="w-full absolute left-0 bottom-0">
        <div className={`w-full flex flex-wrap flex-col px-1`}>
          <div className="flex flex-wrap">
            <p className={`mt-4 font-bold leading-tight`}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
