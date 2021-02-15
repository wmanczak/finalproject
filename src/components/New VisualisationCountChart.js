
import React from "react";
import {Line} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";

const NewVisualisationCountChart = () => {
// const dispatch=useDispatch();
const state=useSelector(state=> state.weeklyStatistics)

    return (
        <Line data={state.data}/>
    )
}


export default NewVisualisationCountChart;



