import React from "react";
import "./Style.css";
import "animate.css";

function Card_2(props) {
  const photo = "/newsImage.png";
  return (
    <>
      <div className="card-container animate__animated animate__fadeInUp mx-3 my-6 h-[420px] max-w-[420px] 3xl:max-w-[480px] 3xl:h-[460px]">
        <figure
          className="figure-img"
          style={{
            backgroundImage: `url(${!props.ImageUrl ? photo : props.ImageUrl})`,
            backgroundPosition: "center",
          }}
        ></figure>
        <div>
          <p className="title-para">
            <a href={props.urL} target="_blank">
              {props.title.slice(0, 105)}
            </a>
          </p>
          <p className="description-para">
            {props.description.slice(0, 105)}...
          </p>
        </div>
        <div className="source-time">
          <span className="source-span">
            {!props.name ? "Unknown" : props.name}
          </span>
          <span> | </span>
          <span className="time-span">
            {new Date(props.time).toDateString()}
          </span>
        </div>
      </div>
    </>
  );
}
export default Card_2;
