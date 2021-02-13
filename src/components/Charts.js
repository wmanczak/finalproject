import React, {useEffect, useState} from "react";

import axios from "axios";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart} from 'recharts';
import { curveCardinal } from 'd3-shape';

const Charts=()=> {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const result = await axios.get('https://app.formly.me/api/slack-bot/extended-activity?from=2020-12-30T00:00&to=2021-01-19T00:00');
        setData(result.data)


    }, [])


  return(
      <>
          </>
  )
}

export default Charts;