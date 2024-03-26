import React, { useState, useEffect } from "react";
import Card_2 from "./Card_2";
import "./Style.css";

function MoreNews(props) {
  const [articles, setArticles] = useState([]);
  const options = {
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    },
  };
  
  const run = () => {
    const URL = `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${props.topic}&country=IN&lang=en`;
    const fetchData = async () => {
      try {
        let response = await fetch(URL, options);
        let items = await response.json();
        // console.log(json.articles);
        setArticles(items.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
  const displayMoreNews = articles  //.slice(0, 45);

  // useEffect(() => {
  //   run();
  // }, []);

  return (
    <>
      <div className=" mt-28 mb-20 md:mt-40 bg-[#FEFEFE]">
        <h1
          id="topicHeading"
          className="bg-[#050505] text-[#dddbcb] rounded-t-lg font-bold text-xl mx-5 md:mx-12 xl:mx-60 border-2 border-[#050505] inline py-1 px-2"
        >
          {props.topic}
        </h1>
        <hr className="border-4 border-[#050505] rounded-r-md mx-5 mb-5 md:mx-12 xl:mx-60" />
        <div className="flex justify-center">
          {displayMoreNews.length === 0 ? (
            <div
              id="loading"
              className="my-40 text-3xl flex items-center justify-center"
            >
              Loading...{" "}
              <img src="/spinner_2.gif" width="70px" alt="" className="ml-2" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {displayMoreNews.map((e) => {
                return (
                  <div className="" key={e.link}>
                    <Card_2
                      title={e.title}
                      ImageUrl={e.photo_url}
                      urL={e.link}
                      name={e.source_url}
                      time={e.published_datetime_utc}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default MoreNews;
