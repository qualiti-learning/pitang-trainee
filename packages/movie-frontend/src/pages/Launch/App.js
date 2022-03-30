import { useEffect, useState } from "react";
import "./App.scss";

const Launch = ({
  description,
  img,
  launchDate = "Data não especificada",
  title,
}) => (
  <div className="launch">
    <img alt="Thaicon 6 Launch logo" src={img} />

    <div className="content">
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{launchDate}</span>
    </div>
  </div>
);

const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getLaunches() {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const data = await response.json();

      setLaunches(data.slice(0, 30));
    }

    getLaunches();
  }, []);

  return (
    <div className="App">
      {launches.map((launch) => (
        <Launch
          description={launch.details}
          img={launch.links.patch.large}
          launchDate={launch.date_utc}
          title={launch.name}
        />
      ))}
    </div>
  );
};

export default App;
