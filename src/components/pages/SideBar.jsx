import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./sidebar.css";
import { sort, rating } from "../../slice/CartSlice";

const SideBar = () => {
  const [low, setLow] = useState(false);
  const [high, setHigh] = useState(false);

  const [lowRate, setLowRate] = useState(false);
  const [highRate, setHighRate] = useState(false);

  const dispatch = useDispatch();

  const handlePrice = (e, option) => {
    if (e.target.value === "low") {
      setLow(true);
      setHigh(false);
    }
    if (e.target.value === "high") {
      setLow(false);
      setHigh(true);
    }

    dispatch(sort(option));
  };

  const handleRating = (e, option) => {
    if (e.target.value === "low") {
      setLowRate(true);
      setHighRate(false);
    }
    if (e.target.value === "high") {
      setLowRate(false);
      setHighRate(true);
    }

    dispatch(rating(option));
  };

  return (
    <div className="sidebar__nav d-flex-colomn">
      <div
        className="ms-3 mt-5"
        style={{
          fontWeight: "bolder",
        }}
      >
        Filters -
      </div>

      <div
        style={{
          borderBottom: "1px solid black",
        }}
        className="mt-5 ms-3 mb-5"
      >
        <div
          style={{
            fontWeight: "bolder",
          }}
        >
          Price -
        </div>
        <input
          onClick={(e) => handlePrice(e, "lth")}
          value="low"
          type="radio"
          checked={low}
        />
        <label className="ms-1" htmlFor="low to high">
          low to high
        </label>
        <div>
          <input
            onClick={(e) => handlePrice(e, "htl")}
            checked={high}
            value="high"
            type="radio"
          />
          <label className="ms-1" htmlFor="low to high">
            high to low
          </label>
        </div>
      </div>

      <div
        style={{
          borderBottom: "1px solid black",
        }}
        className="mt-5 ms-3"
      >
        <div
          style={{
            fontWeight: "bolder",
          }}
        >
          Rating -
        </div>
        <input
          onClick={(e) => handleRating(e, "lth")}
          value="low"
          className=""
          type="radio"
          checked={lowRate}
        />
        <label className="ms-1" htmlFor="low to high">
          low to high
        </label>
        <div>
          <input
            onClick={(e) => handleRating(e, "htl")}
            className=""
            type="radio"
            value="high"
            checked={highRate}
          />
          <label className="ms-1" htmlFor="low to high">
            high to low
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
