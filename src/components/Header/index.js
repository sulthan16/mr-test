export default function Header(props) {
  const { title, linkTitle } = props;
  return (
    <div className="w-full px-5">
      <div className="flex flex-wrap border-b-2 primary-text primary-border">
        <div className="w-1/2">{title}</div>
        <div className="w-1/2 text-right">{linkTitle}</div>
      </div>
    </div>
  );
}
