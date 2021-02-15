import axios from "axios";

const fetchWeeklyStatistics = async (from, to) => {
  const response = await axios.get(
    "https://app.formly.me/api/slack-bot/extended-activity?from=2020-12-30T00:00&to=2021-01-19T00:00"
  );
  return response.data;
};

export const weeklyStatisticsService = {
  fetchWeeklyStatistics,
};
