import React from "react";
import "./Style.css";
import "animate.css";

function Card_1(props) {
  const photo = "/newsImage.png";

  return (
    <>
      <div
        id="card-1"
        className="animate__animated animate__fadeInUp relative mx-2 my-3 h-[300px] lg:h-[280px] max-w-[380px] xl:max-w-[295px] 3xl:max-w-[360px] 3xl:h-[310px] border-b-2 border-[#dddbcb]"
      >
        <figure
          className="card1-figure-img flex justify-center"
          style={{
            backgroundImage: `url(${!props.image ? photo : props.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></figure>
        <div className="space-y-4">
          <p className="card-1-title hover:underline">
            <a href={props.urL} target="_blank">
              {props.title?.slice(0, 105)}
            </a>
          </p>
          <div className="source-time">
            <span className="time-span">
              {new Date(props.date).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card_1;
