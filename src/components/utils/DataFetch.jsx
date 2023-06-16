import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((res) => setData(res));
  });

  return <div></div>;
};

export default DataFetch;
