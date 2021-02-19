import React from "react";
import {render} from "react-dom";
import {Formik} from "formik";
import * as Yup from "yup";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'sans-serif',

    },


});
const FlexCenterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
};

const FormlyInfo = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (


        <div className="app">

            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{fontSize: "3em"}}>What is Formly ?</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={ZoomInScrollOut}>
                        <span style={{fontSize: "3em"}}>Everything in one place ✨</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                        <span style={{fontSize: "3em"}}>Your visualizations and inspirations⛅️</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <div style={FlexCenterStyle}>
          <span style={{fontSize: "3em"}}>
            <Animator animation={MoveIn(-1000, 0)}> You can add various products👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}> 🙋🏻From multiple providers️</Animator>
            <Animator animation={MoveOut(1000, 0)}>Into the shopping list✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>And create your online portfolio 💛</Animator>
          </span>
                    </div>
                </ScrollPage>
                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <div style={{
                            width:"100%",
                            textAlign:"center"
                        }}>
                        <span style={{fontSize: "3em"}}>
                            Check Formly and be Formly !
          </span>
                            </div>
                        <br></br>

                        <span style={{fontSize: "3em",}}>
                            For more informations, send us an email

                    </span>

                    </Animator>
                </ScrollPage>
            </ScrollContainer>


            <Formik

                initialValues={{email: ""}}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Required")


                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <div
                        style={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"center"

                        }}>
                        <form onSubmit={handleSubmit}
                              style={{
                              }}
                        >
                            <label htmlFor="email" style={{
                                display: "block",
                                tWeight: "bold",
                                marginBottom: ".5rem"
                            }}>
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email
                                        ? "text-input error"
                                        : "text-input"}

                                style={{
                                    padding: ".5rem",
                                    fontSize: "16px",
                                    display: "block",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                }}


                            />
                            {
                                errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )
                            }

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                                style={{

                                    maxWidth: "150px",
                                    margin: "20px 0",
                                    padding: "12px 20px",
                                    borderStyle: "none",
                                    borderRadius: "5px",
                                    backgroundColor: "#b22c5a",
                                    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
                                    fontSize: "17px",
                                    fontWeight: "500",
                                    color: "#fff",
                                    cursor: "pointer",
                                    outline: "none",

                                }}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isSubmitting}
                                    style={{

                                        maxWidth: "150px",
                                        margin: "20px 10px",
                                        padding: "12px 20px",
                                        borderStyle: "none",
                                        borderRadius: "5px",
                                        backgroundColor: "#b22c5a",
                                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
                                        fontSize: "17px",
                                        fontWeight: "500",
                                        color: "#fff",
                                        cursor: "pointer",
                                        outline: "none",


                                    }}>
                                Submit

                            </button>

                        </form>
                        </div>
                    );
                }}
            </Formik>

        </div>
    )
}

export default FormlyInfo;