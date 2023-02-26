import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import GlobalStyles from "./components/styles/Global.styled";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState([37.5665, 126.978]);
  const [isError, setError] = useState(false)

  const fetchData = async (adress) => {
    const API_KEY = "95a70f07da0e483a99d51f551bd35232";
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}${
          adress ? `&ip=${adress}` : ""
        }`
      );
      const data = await response.json();
      if (response.ok) {
        setError(false)
        setUser(data);
        setCenter([data.latitude, data.longitude]);
        setLoading(false);
      } else {
        setError(true)
        setLoading(false);
        throw Error(response.statusText)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header fetchData={fetchData} user={user} loading={loading} />
      <Container user={user} loading={loading} isError={isError} />
      <Map user={user} loading={loading} center={center} />
      <Footer />
    </>
  );
}

export default App;
