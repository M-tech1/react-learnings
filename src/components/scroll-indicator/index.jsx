import { useEffect, useState } from "react";
import "./style.css";
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrolPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      setData(data.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("testing value: ", scrolPercentage);
  return (
    <div className="main-container">
      <div className="topContainer">
        <div className="scroll-progress-tracker">
          <div
            className="current-progress"
            style={{ width: `${scrolPercentage}%` }}
          ></div>
        </div>
      </div>

      <h1>Costom Scroll Indicator</h1>
      <div className="data-container">
        {data.map((dataItem) => (
          <li key={dataItem?.id}>{dataItem.title}</li>
        ))}
      </div>
    </div>
  );
}
