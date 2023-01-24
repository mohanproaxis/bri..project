import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";
import "./center.css";

const Centre = ({ state }) => {
  const [image, setimage] = useState();
  const data = { state };
  const addnewvalue = () => {
    setimage(data.state);
  };

  const [search, setSearch] = useState("");
  const [emoji, setemoji] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setemoji(newData);
  }, [search]);

  return (
    <>
      <div style={{ display: "flex", marginLeft: "20px" }}>
        <div>
          <div
            style={{
              margin: "30px",

              display: "flex",
              flexDirection: "column",
              height: "80%",
            }}
          >
            <img
              src={image}
              style={{
                width: "90px",
                padding: "10px",
                marginBottom: "10px",
              }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              margin: "15px",
              marginTop: "30px",

              width: "500px",
              height: "80%",
              objectFit: "cover",
            }}
          >
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Start typing here.."
              style={{
                position: "absolute",
                left: "40px",
                top: "70px",
                overflow: "hidden",
                padding: "5px",
                margin: "8px",
                borderBottom: "1px solid skyblue",
                background: "none",
                border: "none",
                outline: "none",
              }}
            />

            {search ? (
              <div className="list">
                {emoji.map((emoji) => (
                  <div className="symbol">
                    {" "}
                    <h2 key={emoji.title}>{emoji.symbol}</h2>
                  </div>
                ))}{" "}
              </div>
            ) : null}

            <img
              style={{
                width: "500px",
                height: "100%",
                cursor: "pointer",
                display: "block",
                objectFit: "cover",
              }}
              src={state}
              alt="cartoon"
            />
          </div>

          <div
            style={{
              margin: "10px",

              height: "10%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: " right",
                gap: "40px",
                padding: "12px",
              }}
            >
              <button
                style={{
                  padding: "7px",
                  borderRadius: "20px",
                  backgroundColor: "orange",
                  color: "white",
                }}
              >
                Help Me
              </button>
              <button
                style={{
                  padding: "7px",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "green",
                }}
              >
                Book Review
              </button>
              <button
                onClick={addnewvalue}
                style={{
                  padding: "7px",
                  borderRadius: "20px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Add New Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Centre;
