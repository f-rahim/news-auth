import { useEffect, useState } from "react";
import SingleNews from "../../components/SingleNews/SingleNews";
import "./Home.css";

const Home = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/news/")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="home-component">
      <div className="all-news">
        {news?.map((singleNews) => (
          <SingleNews singleNews={singleNews} key={singleNews._id}></SingleNews>
        ))}
      </div>
    </div>
  );
};

export default Home;
