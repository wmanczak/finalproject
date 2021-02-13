import {createAction, createSlice} from '@reduxjs/toolkit'

const fetchWeeklyStatisticsStart = createAction('fetchWeeklyStatisticsStart')
const fetchWeeklyStatisticsSuccess = createAction('fetchWeeklyStatisticsSuccess')
const fetchWeeklyStatisticsFailure = createAction('fetchWeeklyStatisticsFailure')


const initialState = {
    statistics: [],
    loading: true
}

createSlice({
    name: 'weeklyStatistics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeeklyStatisticsStart, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeeklyStatisticsSuccess, (state, action) => {
            })
            .addCase(fetchWeeklyStatisticsFailure, (state, action) => {
            })

    },
})
