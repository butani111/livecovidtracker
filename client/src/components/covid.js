import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState(null);
  const [currentState, setCurrentState] = useState(null);

  const getCovidData = async () => {
    try {
      const res = await fetch("http://localhost:5000/getdata");
      const dataset = await res.json();

      dataset.statewise[0].state = "INDIA";

      setAllData(dataset.statewise);
      setData(dataset.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  useEffect(() => {
    for (let state of allData) {
      if (currentState === state.state) {
        if (currentState === "INDIA") {
          state.state = "INDIA";
        }
        setData(state);
        break;
      }
    }
  }, [currentState]);

  return (
    <>
      {!data ? (
        <div className="loading">Loading...</div>
      ) : (
        <section id="_main_">
          <div className="navbar">
            <h1 className="text-center">
              <span style={{ fontSize: "0.8rem" }}>🔴</span> LIVE COVID TRACKER
            </h1>
          </div>

          <select
            className="selection-list"
            onChange={(e) => setCurrentState(e.target.value)}
          >
            {allData.map((item) => (
              <option value={item.state}>{item.state}</option>
            ))}
          </select>

          <div id="main">
            <ul>
              <li className="card text-center">
                <div className="card-main bg-color-1">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>OUR</span>{" "}
                      {data.state === "INDIA" ? "COUNTRY" : "STATE"}
                    </p>
                    <p className="card-value">{data.state.toUpperCase()}</p>
                  </div>
                </div>
              </li>
              <li className="card text-center">
                <div className="card-main bg-color-2">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>TOTAL</span> CONFIRMED
                    </p>
                    <p className="card-value">{data.confirmed}</p>
                  </div>
                </div>
              </li>
              <li className="card text-center">
                <div className="card-main bg-color-3">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>TOTAL</span> ACTIVE
                    </p>
                    <p className="card-value">{data.active}</p>
                  </div>
                </div>
              </li>
              <li className="card text-center">
                <div className="card-main bg-color-4">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>TOTAL</span> RECOVERED
                    </p>
                    <p className="card-value">{data.recovered}</p>
                  </div>
                </div>
              </li>
              <li className="card text-center">
                <div className="card-main bg-color-5">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>TOTAL</span> DEATHS
                    </p>
                    <p className="card-value">{data.deaths}</p>
                  </div>
                </div>
              </li>
              <li className="card text-center">
                <div className="card-main bg-color-6">
                  <div className="card-inner">
                    <p className="card-title">
                      <span>LAST</span> UPDATED
                    </p>
                    <p className="card-value" style={{ margin: "13% 0 0 0" }}>
                      {data.lastupdatedtime}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="my-footer">
            <p>
              Creator : Shyam Butani
              <a
                href="https://github.com/butani111"
                target="_blank"
                className="github-profile-btn"
              >
                Github Profile
              </a>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Covid;
