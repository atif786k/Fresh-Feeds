import React from "react";
import "./Style.css";
import 'animate.css';


function Card_1(props) {
  const photo = "/newsImage.png"

  return (
    <>
      <div
        id="card_1"
        className="animate__animated animate__fadeInUp relative mx-1 xl:mx-1 my-3 min-h-[290px] md:min-h-[260px] max-w-[220px] border-b-2 border-[#dddbcb]"
      >
        <div className="flex justify-center max-h-[120px]">
          <img src={!props.image ? photo : props.image} alt="" width="220px" />
        </div>
        <div className="space-y-4">
          <a href={props.urL} target="_blank">
            <p className="text-lg font-bold hover:underline">
              {props.title?.slice(0, 80)}...
            </p>
          </a>
          <p className="absolute bottom-1 text-gray-500 font-semibold font-mono">
            {" "}
            {new Date(props.date).toDateString()}
          </p>
        </div>
      </div>
    </>
  );
}
export default Card_1;
