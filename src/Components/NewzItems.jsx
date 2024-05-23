import React, { useEffect, useState } from "react";
import "./Style.css";
import Card_1 from "./Card_1";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import Daydate from "./Daydate";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NewzItems() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07aaf7093dmshae0e2bc1ce4d61ep14bdf4jsn71776f1561fa",
      // "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      // "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const options_1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07aaf7093dmshae0e2bc1ce4d61ep14bdf4jsn71776f1561fa",
      // "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      // "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "anime-news-net.p.rapidapi.com",
    },
  };

  const options_2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07aaf7093dmshae0e2bc1ce4d61ep14bdf4jsn71776f1561fa",
      // "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      // "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "cnbc.p.rapidapi.com",
    },
  };

  const [dataItems, setDataItems] = useState([]);
  const [animeData, setAnimeData] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  // Big Screen fetch Function :--
  const run = () => {
    const URL =
      "https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?size=10";
    const fetch_Data = async () => {
      try {
        const response = await fetch(URL, options);
        const items = await response.json();
        setDataItems(items.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetch_Data();
  };

  const run_1 = () => {
    // const URL_1 = "https://anime-news-net.p.rapidapi.com/api/news";
    const URL_1 = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const fetch_Data_1 = async () => {
      try {
        const response = await fetch(URL_1, options_1);
        const items = await response.json();
        setAnimeData(items.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetch_Data_1();
  };

  const run_2 = () => {
    const URL_2 =
      "https://seeking-alpha.p.rapidapi.com/news/v2/list-by-symbol?id=tsla&size=20&number=1&category=earnings_news";

    const fetch_Data_2 = async () => {
      try {
        const response = await fetch(URL_2, options);
        const items = await response.json();
        // console.log(items);
        setMarketData(items.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetch_Data_2();
  };

  const run_3 = () => {
    const URL_3 =
      "https://cnbc.p.rapidapi.com/news/v2/list-special-reports?pageSize=15&page=1";
    const fetch_Data_3 = async () => {
      try {
        const response = await fetch(URL_3, options_2);
        const items = await response.json();
        // console.log(items);
        setNewsData(items.data.specialReportsEntries.results);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetch_Data_3();
  };

  useEffect(() => {
    run();
    // run_1();
    run_2();
    run_3();
  }, []);

  const photo = "/newsImage.png";

  const displayItems = dataItems.slice(2, 10);
  const displayNewsItems = newsData.slice(2, 10);
  // const displayAnimeItems = animeData.slice(2, 10);
  // const displayAnimeItems = animeData;
  const displayMarketItems = marketData.slice(2, 10);

  return (
    <>
      <div
        id="mainComp"
        className=" flex flex-col items-center justify-center mt-28 md:mt-40"
      >
        {displayItems.length === 0 ? (
          <div
            id="loading"
            className="w-[340px] md:w-[700px] lg:w-[1000px] xl:w-[1250px]"
          >
            <Skeleton height="350px" count={1} />
          </div>
        ) : (
          <div className="news-item-container mx-3 text-[#fefefe] space-y-2 font-bold relative md:mx-6 md:space-x-2 lg:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:h-[395px] lg:w-[1000px] xl:w-[1250px] 3xl:w-[1505px] 3xl:h-[460px]">
            <h1 className="heading absolute left-0 md:left-2 top-[-35px] text-[#050505] font-semibold text-2xl">
              Trending News
            </h1>
            <h1 className="absolute text-[#0505058a] text-xl hidden md:flex md:right-2 top-[-35px]">
              <Daydate />
            </h1>
            <div
              id="cards"
              className="animate__animated animate__fadeInLeft bg-bottom bg-no-repeat bg-cover w-92 md:w-auto h-48 relative transition-all ease-in lg:col-span-2 lg:row-span-2 lg:h-[395px] 3xl:h-[460px]"
              style={{
                backgroundImage: `url(${dataItems[5].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[5].links.canonical} target="_blank">
                <p className="absolute bottom-10 px-2 hover:underline">
                  {dataItems[5].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 text-gray-200">
                {new Date(dataItems[5].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInRight lg:grid h-48 bg-no-repeat bg-cover transition-all ease-in lg:h-auto lg:col-span-2 relative"
              style={{
                backgroundImage: `url(${dataItems[6].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[6].links.canonical} target="_blank">
                <p className="absolute bottom-10 px-2 hover:underline">
                  {dataItems[6].attributes.title}
                </p>
              </a>

              <p className="px-2 absolute bottom-2 lg:flex text-gray-200">
                {new Date(dataItems[6].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInLeft lg:grid h-48 bg-no-repeat bg-cover transition-all ease-in relative lg:h-auto"
              style={{
                backgroundImage: `url(${dataItems[7].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[7].links.canonical} target="_blank">
                <p className="absolute px-2 bottom-10 lg:bottom-7 hover:underline">
                  {dataItems[7].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 lg:bottom-1 text-gray-200 text-md">
                {new Date(dataItems[7].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInRight lg:grid h-48 bg-no-repeat bg-cover transition-all ease-in relative lg:h-auto"
              style={{
                backgroundImage: `url(${dataItems[9].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[9].links.canonical} target="_blank">
                <p className="lg:absolute px-2 bottom-10 lg:bottom-7 hover:underline">
                  {dataItems[9].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 lg:bottom-1 text-gray-200 text-md">
                {new Date(dataItems[9].attributes.publishOn).toDateString()}
              </p>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h1 className="heading bg-[#050505] text-white rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            News
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {displayNewsItems.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1250px]">
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {displayNewsItems?.map((e) => {
                return (
                  <div className="" key={e.id}>
                    <Card_1
                      title={e.headline}
                      image={e.promoImage.url}
                      date={e.dateFirstPublished}
                      urL={e.url}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-20">
          <h1 className="heading bg-[#050505] text-white rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            Anime
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {animeData.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1250px]">
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {animeData?.map((e) => {
                return (
                  // <div className="" key={e.details_api.id}>
                  //   <Card_1
                  //     title={e.article.title}
                  //     image={e.article.thumbnail}
                  //     date={e.article.date}
                  //     urL={e.article.url}
                  //   />
                  // </div>
                  <div className="" key={e._id}>
                    <Card_1
                      title={e.title}
                      image={e.image}
                      date={e.status}
                      urL={e.link}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-20">
          <h1 className="heading bg-[#050505] text-white rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            Market & Industry
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {displayMarketItems.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1250px]">
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {displayMarketItems?.map((e) => {
                return (
                  <div className="" key={e.id}>
                    <Card_1
                      title={e.attributes.title}
                      image={e.attributes.gettyImageUrl}
                      date={e.attributes.publishOn}
                      urL="https://bbc.com"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <h1 className="flex items-center text-xl font-semibold text-gray-400 my-8">
          <RxDoubleArrowLeft className="mr-4" />
          Sign Up now to get daily news
          <RxDoubleArrowRight className="ml-4" />
        </h1>
      </div>
    </>
  );
}
export default NewzItems;
