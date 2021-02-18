import React, {useState} from "react";
import moment from "moment";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {useDispatch} from "react-redux";
import {fetchWeeklyStatistics} from "../conteiners/weekly-statistics/weeklyStatisticsSlice";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const DataPicker = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focusedInput, setFocusedInput] = useState();

    const handleDatePickerChange = ({startDate, endDate}) => {
        if ((startDate, endDate)) {
            dispatch(
                fetchWeeklyStatistics(
                    moment(startDate).format("YYYY-MM-DDTMM:SS"),
                    moment(endDate).format("YYYY-MM-DDTMM:SS")
                )
            );
        }
        setStartDate(startDate);
        setEndDate(endDate);
    };

    return (
        <div
            style={{
                marginTop: 20,
                textAlign: "center",

            }}
            className="Data-picker"
        >
            <DateRangePicker

                startDate={startDate}
                endDate={endDate}
                isOutsideRange={(day) =>
                    moment(day).isAfter(moment.now()) ||
                    moment(day).isBefore(moment("2020-01-01"))
                }
                startDateId="your_unique_start_date_id"
                endDateId="your_unique_end_date_id"
                onDatesChange={handleDatePickerChange}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            />
        </div>
    );
};

export default DataPicker;
