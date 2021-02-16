import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWeeklyStatistics,
  selectWeeklyStatistics,
  selectWeeklyStatisticsLoading,
  selectWeeklyStatisticsParsed,
} from "../conteiners/weekly-statistics/weeklyStatisticsSlice";

const NewVisualisationCountChart = () => {
  const dispatch = useDispatch();
  const statistics = useSelector(selectWeeklyStatistics);
  const parsed = useSelector(selectWeeklyStatisticsParsed);
  const statisticsLoading = useSelector(selectWeeklyStatisticsLoading);

  useEffect(async () => {
    dispatch(fetchWeeklyStatistics());
  }, [dispatch]);

  return (
    <>
      {!statisticsLoading && (
        <>
          <LineChart
            width={500}
            height={300}
            data={parsed}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="newVisualizationCommentCount"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="newProductCount"
              stroke="red"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <LineChart
            width={700}
            height={300}
            data={parsed}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="newDocumentsSize"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </>
      )}
    </>
  );
};

export default NewVisualisationCountChart;
