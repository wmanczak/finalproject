import axios from "axios";

const fetchWeeklyStatistics = async (from, to) => {
  const response = await axios.get(
    `https://app.formly.me/api/slack-bot/extended-activity?from=${from}&to=${to}`
  );
  return response.data;
};

export const weeklyStatisticsService = {
  fetchWeeklyStatistics,
};
