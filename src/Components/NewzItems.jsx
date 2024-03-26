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
      "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      // "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const options_1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
      // "X-RapidAPI-Key": "93337b3302mshae531ee2232d6d6p120395jsn420ebc64749e",
      "X-RapidAPI-Host": "anime-news-net.p.rapidapi.com",
    },
  };

  const options_2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e345e8925fmshe684befd705bd60p1cf18ajsn1bd7b0d49a0f",
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
        // setDataItems(items.data);
        // console.log(items.data);
        setDataItems(items.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetch_Data();
  };

  const run_1 = () => {
    const URL_1 = "https://anime-news-net.p.rapidapi.com/api/news";
    const fetch_Data_1 = async () => {
      try {
        const response = await fetch(URL_1, options_1);
        const items = await response.json();
        // console.log(items);
        setAnimeData(items);
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
    run_1();
    run_2();
    run_3();
  }, []);

  // useEffect(() => {
  //   console.log("dataItems:", dataItems);
  // }, [dataItems]);

  const photo = "/newsImage.png";

  const displayItems = dataItems.slice(2, 10);
  const displayNewsItems = newsData.slice(2, 12);
  const displayAnimeItems = animeData.slice(2, 12);
  const displayMarketItems = marketData.slice(2, 12);

  return (
    <>
      <div
        id="mainComp"
        className=" flex flex-col items-center justify-center mt-28 md:mt-40"
      >
        {displayItems.length === 0 ? (
          <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1110px]">
            {/* Loading...{" "} */}
            {/* <img src="/spinner.gif" width="70px" alt="" className="ml-2" /> */}

            <Skeleton height="350px" count={1} />
          </div>
        ) : (
          <div className="mx-3 text-[#fefefe] space-y-2 font-bold relative md:mx-6 md:space-x-2 lg:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:h-[395px] lg:w-[1000px] xl:w-[1150px]">
            <h1 className="heading absolute left-0 md:left-2 top-[-35px] text-[#050505] font-semibold text-2xl">
              Trending News
            </h1>
            <h1 className="absolute text-[#0505058a] text-xl hidden md:flex md:right-2 top-[-35px]">
              <Daydate />
            </h1>
            <div
              id="cards"
              className="animate__animated animate__fadeInLeft bg-[#008080] bg-bottom text-xl bg-no-repeat bg-cover w-92 md:w-auto h-48 relative transition-all ease-in lg:col-span-2 lg:row-span-2 lg:h-[395px]"
              style={{
                backgroundImage: `url(${dataItems[5].attributes.gettyImageUrl})`,
                // backgroundImage: `url(${photo})`,
              }}
            >
              <a href={dataItems[5].links.canonical} target="_blank">
                <p className="absolute bottom-10 px-2 hover:underline">
                  {dataItems[5].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 text-gray-200 font-mono">
                {new Date(dataItems[5].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInRight bg-[#008080] lg:grid text-xl h-48 bg-no-repeat bg-cover transition-all ease-in lg:h-auto lg:col-span-2 relative"
              style={{
                backgroundImage: `url(${dataItems[6].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[6].links.canonical} target="_blank">
                <p className="absolute bottom-10 px-2 hover:underline">
                  {dataItems[6].attributes.title}
                </p>
              </a>

              <p className="px-2 absolute bottom-2 lg:flex text-gray-200 font-mono">
                {new Date(dataItems[6].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInLeft bg-[#008080] lg:grid text-xl h-48 bg-no-repeat bg-cover transition-all ease-in relative lg:h-auto"
              style={{
                backgroundImage: `url(${dataItems[7].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[7].links.canonical} target="_blank">
                <p className="absolute px-2 bottom-10 lg:bottom-7 hover:underline">
                  {dataItems[7].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 lg:bottom-1 text-gray-200 text-md font-mono">
                {new Date(dataItems[7].attributes.publishOn).toDateString()}
              </p>
            </div>
            <div
              id="cards"
              className="animate__animated animate__fadeInRight bg-[#008080] lg:grid text-xl h-48 bg-no-repeat bg-cover transition-all ease-in relative lg:h-auto"
              style={{
                backgroundImage: `url(${dataItems[9].attributes.gettyImageUrl})`,
              }}
            >
              <a href={dataItems[9].links.canonical} target="_blank">
                <p className="lg:absolute px-2 bottom-10 lg:bottom-7 hover:underline">
                  {dataItems[9].attributes.title}
                </p>
              </a>
              <p className="mt-2 px-2 absolute bottom-2 lg:bottom-1 text-gray-200 text-md font-mono">
                {new Date(dataItems[9].attributes.publishOn).toDateString()}
              </p>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h1 className="bg-[#050505] text-[#dddbcb] rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            News
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {displayNewsItems.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1110px]">
              {/* <img src="/spinner_2.gif" width="70px" alt="" className="ml-2" /> */}
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
          <h1 className="bg-[#050505] text-[#dddbcb] rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            Anime
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {displayAnimeItems.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1110px]">
              {/* <img src="/spinner_2.gif" width="70px" alt="" className="ml-2" /> */}
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {displayAnimeItems?.map((e) => {
                return (
                  <div className="" key={e.details_api.id}>
                    <Card_1
                      title={e.article.title}
                      image={e.article.thumbnail}
                      date={e.article.date}
                      urL={e.article.url}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-20">
          <h1 className="bg-[#050505] text-[#dddbcb] rounded-t-lg font-bold text-xl ml-2 xl:ml-1 border-2 border-[#050505] inline py-1 px-2">
            Market & Industry
          </h1>
          <hr className="border-4 border-[#050505] rounded-r-md mx-2 xl:mx-1 mb-5" />
          {displayMarketItems.length === 0 ? (
            <div id="loading" className="w-[340px] md:w-[700px] xl:w-[1110px]">
              {/* <img src="/spinner_2.gif" width="60px" alt="" className="ml-2" /> */}
              <Skeleton height="50px" count={4} />
            </div>
          ) : (
            <div className="text-[#050505] mx-2 xl:mx-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
          Follow US for daily updated News
          <RxDoubleArrowRight className="ml-4" />
        </h1>
      </div>
    </>
  );
}
export default NewzItems;

{
  /* ChatGPT code */
}
{
  /* // useEffect(() => { 
  {/* //   const fetchData = async () => {
  //     const URL = "https://seeking-alpha.p.rapidapi.com/news/v2/list-trending?size=10";

  //     try {
  //       const response = await fetch(URL, options);
  //       const items = await response.json();
  //       setDataItems(items.data);
  //     } catch (error) {
  //       console.log("ERROR", error);
  //     }
  //   };

  //   fetchData();
  // }, []); */
}

{
  /* <div className="relative flex justify-center text-[#f0f0f0] mt-32 md:mt-40">
        <h1 className="heading text-[#050505] absolute top-[-40px] left-56 text-2xl">
          Trending News
        </h1>
        <div className="mx-2 space-y-2 font-serif font-bold md:mx-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:h-96 lg:w-[1100px]">
          {dataItems.length > 0 &&
            displayItems.map((item, index) => (
              <div
                key={index}
                className={`bg-[#008080] text-xl bg-no-repeat bg-cover relative transition-all ease-in ${
                  index === 0 ? 'h-72 lg:h-96 lg:col-span-2 lg:row-span-2' : 'h-96'
                }`}
                style={{
                  backgroundImage: `url(${item.attributes.gettyImageUrl})`,
                }}
              >
                <a href={item.links.canonical} target="_blank">
                  <p className="absolute bottom-10 px-2 hover:underline">
                    {item.attributes.title}
                  </p>
                </a>
                <p className="mt-2 px-2 absolute bottom-2 text-gray-200 text-md font-mono">
                  {new Date(item.attributes.publishOn).toGMTString()}
                </p>
              </div>
            ))}
        </div>
      </div> */
}