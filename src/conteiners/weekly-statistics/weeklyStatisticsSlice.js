import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { weeklyStatisticsService } from "../../services";
const fetchWeeklyStatisticsStart = createAction(
  "weeklyStatistics/fetchWeeklyStatisticsStart"
);
const fetchWeeklyStatisticsSuccess = createAction(
  "weeklyStatistics/fetchWeeklyStatisticsSuccess"
);
const fetchWeeklyStatisticsFailure = createAction(
  "weeklyStatistics/fetchWeeklyStatisticsFailure"
);

const initialState = {
  statistics: [],
  loading: true,
};

const weeklyStatisticsSlice = createSlice({
  name: "weeklyStatistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeeklyStatisticsStart, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeeklyStatisticsSuccess, (state, action) => {
        const { statistics } = action.payload;
        state.statistics = statistics;
        state.loading = false;
      })
      .addCase(fetchWeeklyStatisticsFailure, (state) => {
        state.loading = false;
      });
  },
});

const selectWeeklyStatisticsState = (store) => store.weeklyStatistics;
export const selectWeeklyStatistics = createSelector(
  selectWeeklyStatisticsState,
  (statisticsSlice) => statisticsSlice.statistics
);
export const selectWeeklyStatisticsLoading = createSelector(
  selectWeeklyStatisticsState,
  (statisticsSlice) => statisticsSlice.loading
);
export const selectWeeklyStatisticsParsed = createSelector(
  selectWeeklyStatisticsState,
  (statisticsSlice) =>
    statisticsSlice.statistics.map((week) => ({
      week: moment(week.from).week(),
      newOfficeCount: week.newOfficeCount,
      ...week.overallActivity,
    }))
);
export const fetchWeeklyStatistics = ( from, to) => async (dispatch) => {
  try {
    const statistics = await weeklyStatisticsService.fetchWeeklyStatistics(
      from,
      to
    );
    dispatch(fetchWeeklyStatisticsSuccess({ statistics }));
  } catch (error) {
    dispatch(fetchWeeklyStatisticsFailure());
  }
};

export default weeklyStatisticsSlice.reducer;
