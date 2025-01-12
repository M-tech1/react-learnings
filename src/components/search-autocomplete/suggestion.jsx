export default function Suggestion({ data, handleClick }) {
  return (
    <ul className="">
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
