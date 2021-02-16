
import React from "react";
import {Line} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import {
    selectWeeklyStatistics,
    selectWeeklyStatisticsLoading
} from "../conteiners/weekly-statistics/weeklyStatisticsSlice";

const NewVisualisationCountChart = () => {
    const statistics = useSelector(selectWeeklyStatistics);
    const statisticsLoading = useSelector(selectWeeklyStatisticsLoading);

    return (
        <Line data={state.data}/>
    )
}


export default NewVisualisationCountChart;



