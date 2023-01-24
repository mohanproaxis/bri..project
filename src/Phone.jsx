import React from "react";
import "./phone.css";
import Images from "./Images";

const Phone = ({ setstate }) => {
  const images = <Images />;
  let img = images.type;

  const zoom = (id) => {
    const pic = img.find((e) => {
      if (e.id === id) {
        return e.img;
      }
    });

    setstate(pic.img);
  };

  return (
    <>
      <div
        style={{
          margin: "15px",
          marginTop: "30px",
          backgroundColor: "skyblue",
          height: "100%",
          width: "35%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          borderRadius: "15px",
        }}
      >
        {img.map((e) => {
          return (
            <div className="prodiv" key={e.id}>
              <img
                src={e.img}
                onClick={() => zoom(e.id)}
                className="image"
                alt="iphone images"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Phone;
