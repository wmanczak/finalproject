import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchWeeklyStatistics,
    selectWeeklyStatistics,
    selectWeeklyStatisticsLoading,
    selectWeeklyStatisticsParsed,
} from "../conteiners/weekly-statistics/weeklyStatisticsSlice";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: "bold",
        color:"white",
    },

}));
const NewVisualisationCountChart = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const statistics = useSelector(selectWeeklyStatistics);
    const parsed = useSelector(selectWeeklyStatisticsParsed);
    const statisticsLoading = useSelector(selectWeeklyStatisticsLoading);

    useEffect(async () => {
        dispatch(fetchWeeklyStatistics());
    }, [dispatch]);


    return (
        <div className={classes.root}>


                    <>
            {!statisticsLoading && (
                <>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        marginTop: 30,
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent:"center"

                    }}>
                        <div>
                        <Accordion >
                            <AccordionSummary
                                style={{
                                    backgroundColor:"#b22c5a"
                                }}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Comments and Visualization Count</Typography>

                            </AccordionSummary>
                            <AccordionDetails>

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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newVisualizationCommentCount"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="newVisualizationCount"
                                stroke="red"
                                activeDot={{r: 8}}
                            />

                        </LineChart>
                            </AccordionDetails>
                        </Accordion>
                         <Accordion>
                             <AccordionSummary
                                 style={{
                                     backgroundColor:"#b22c5a"
                                 }}
                                 expandIcon={<ExpandMoreIcon />}
                                 aria-controls="panel1a-content"
                                 id="panel1a-header"
                             >
                                 <Typography className={classes.heading}>Document Size</Typography>
                             </AccordionSummary>
                             <AccordionDetails>
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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newDocumentsSize"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />

                        </LineChart>
                             </AccordionDetails>
                         </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Alternatives and Product Count</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newProductAlternativesCount"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="newProductCount"
                                stroke="red"
                                activeDot={{r: 8}}
                            />
                        </LineChart>
                                </AccordionDetails>
                                </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Product Price</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newProductPrice"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />

                        </LineChart>
                                </AccordionDetails>
                                    </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>New Users, Clients and Workers</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newUsers"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="newClients"
                                stroke="red"
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="newWorkers"
                                stroke="green"
                                activeDot={{r: 8}}
                            />
                        </LineChart>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Deals and Ordered Deals Count</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="week"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line
                                type="monotone"
                                dataKey="newDealsCount"
                                stroke="#8884d8"
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="newOrderedDealsCount"
                                stroke="red"
                                activeDot={{r: 8}}
                            />
                        </LineChart>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Comment and Note Count</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="week"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line
                                    type="monotone"
                                    dataKey="newNoteCommentCount"
                                    stroke="#8884d8"
                                    activeDot={{r: 8}}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="newNoteCount"
                                    stroke="red"
                                    activeDot={{r: 8}}
                                />
                            </LineChart>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    style={{
                                        backgroundColor:"#b22c5a"
                                    }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Project and Inspiration Count</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
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
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="week"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Line
                                    type="monotone"
                                    dataKey="newProjectCount"
                                    stroke="#8884d8"
                                    activeDot={{r: 8}}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="newInspirationCount"
                                    stroke="red"
                                    activeDot={{r: 8}}
                                />
                            </LineChart>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        </div>
                </>
            )}
        </>
            </div>
    );
};

export default NewVisualisationCountChart;
