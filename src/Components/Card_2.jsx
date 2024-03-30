import React from "react";
import "./Style.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import 'animate.css';

function Card_2(props) {
  const photo = "/newsImage.png"
  return (
    <>
      <div
        id="card_2"
        className="animate__animated animate__fadeInUp bg-[#fefefe] mx-5 my-6 min-h-[390px] max-w-[320px] border-r-2 border-b-2 border-[#f0f0f0] relative"
      >
        <span className="bg-red-600 text-white font-mono rounded-md px-2 absolute right-[-8px] top-[-10px]">
          {props.name?.slice(12, -4)}
        </span>
        <div id="img" className="flex justify-center max-h-[200px]">
          <img
            src={!props.ImageUrl ? photo : props.ImageUrl}
            alt=""
            width="320px"
            className=""
          />
        </div>
        <div className="px-">
          <p className="text-xl py-1 font-semibold">{props.title}</p>
          <p className="text-lg mt-2 text-gray-500 absolute bottom-12">
            {new Date(props.time).toDateString()}
          </p>
          <a href={props.urL} target="_blank">
            <button
              id="btn"
              className="mt-2 text-[#dddbcb] font-semibold text-lg py-1 px-2 absolute bottom-4 flex items-center hover:text-[#008080]"
            >
              Read More
              <RxDoubleArrowRight className="ml-1 text-xl" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Card_2;
