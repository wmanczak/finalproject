import {createAction, createSelector, createSlice} from "@reduxjs/toolkit";
import {weeklyStatisticsService} from "../../services";
import moment from "moment";
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
    data: {
        labels: [],
        datasets: [{
            label: "Formly-Data",
            backgroundColor: 'rgba(238,175,0, 0.4)',
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)'
        }]
    }
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
                const {statistics} = action.payload;
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
export const fetchWeeklyStatistics = () => async (dispatch) => {

    try {
        dispatch(fetchWeeklyStatisticsStart());
        const statistics = await weeklyStatisticsService.fetchWeeklyStatistics();
        dispatch(fetchWeeklyStatisticsSuccess({statistics}));
        // const labels=[];
        // const data=[];
        // for(let i=0; i<statistics.data.length; i++){
        //     data.unshift(statistics.data[i].close)
        //     labels.unshift(moment(statistics.data[i].date).format("LT"))
        //
        // }

    } catch (error) {
        dispatch(fetchWeeklyStatisticsFailure());
    }
};

export default weeklyStatisticsSlice.reducer;
