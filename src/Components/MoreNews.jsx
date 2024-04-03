import React, { useState, useEffect } from "react";
import Card_2 from "./Card_2";
import "./Style.css";

function MoreNews(props) {
  const [article, setArticle] = useState([]);
  const apiKey = "9c3a2e976a521985949edd68ac41ade2";
  const url = `https://gnews.io/api/v4/top-headlines?category=${props.topic}&lang=en&max=10&apikey=${apiKey}`;

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setArticle(data.articles);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(article);

  return (
    <>
      <div className=" mt-28 mb-20 md:mt-40 bg-[#FEFEFE]">
        <h1
          id="topicHeading"
          className="bg-[#050505] text-[#dddbcb] rounded-t-lg font-bold text-xl mx-5 md:mx-12 xl:mx-24  3xl:mx-52 border-2 border-[#050505] inline py-1 px-2"
        >
          {props.topic}
        </h1>
        <hr className="border-4 border-[#050505] rounded-r-md mx-5 mb-5 md:mx-12 xl:mx-24 3xl:mx-52" />
        <div className="flex justify-center">
          {article.length === 0 ? (
            <div
              id="loading"
              className="my-40 text-3xl flex items-center justify-center"
            >
              Loading...{" "}
              <img src="/spinner_2.gif" width="70px" alt="" className="ml-2" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {article.map((e) => {
                return (
                  <div className="" key={e.url}>
                    <Card_2
                      title={e.title}
                      description={e.description}
                      ImageUrl={e.image}
                      urL={e.url}
                      name={e.source.name}
                      time={e.publishedAt}
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
