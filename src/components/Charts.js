import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
} from "recharts";
import { curveCardinal } from "d3-shape";
import {
  fetchWeeklyStatistics,
  selectWeeklyStatistics,
  selectWeeklyStatisticsLoading,
} from "../conteiners/weekly-statistics/weeklyStatisticsSlice";

const Charts = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const statistics = useSelector(selectWeeklyStatistics);
  const statisticsLoading = useSelector(selectWeeklyStatisticsLoading);

  useEffect(async () => {
    dispatch(fetchWeeklyStatistics());
  }, [dispatch]);

  return (
    <>
      {JSON.stringify(statistics)}
      {statisticsLoading}
    </>
  );
};

export default Charts;
