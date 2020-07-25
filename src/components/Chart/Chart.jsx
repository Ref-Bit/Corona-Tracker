import React, { useState, useEffect } from "react";
import i18next from "i18next";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import Styles from "./Chart.module.css";
import "../../config";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: i18next.t("infected.title"),
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: i18next.t("deaths.title"),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: [
          i18next.t("infected.title"),
          i18next.t("recovered.title"),
          i18next.t("deaths.title"),
        ],
        datasets: [
          {
            label: i18next.t("labels.people"),
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: [i18next.t("desc.country"), i18next.t(country)],
        },
      }}
    />
  ) : null;

  return (
    <div className={Styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
