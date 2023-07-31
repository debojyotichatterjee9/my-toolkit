import React, { Fragment, useEffect, useReducer } from 'react';
import { Container, Card, Row, Col, Text, Input, Spacer, Button } from "@nextui-org/react";



const formReducer = (state, action) => {
    if (action.type === "EMAIL_CHANGE") {
        return {
            email: action.email,
            emailValidationFlag: action.email.includes("@"),
            password: state.password,
            pwdValidationFlag: state.pwdValidationFlag
        }
    }
    if (action.type === "EMAIL_BLUR") {
        return {
            email: state.email,
            emailValidationFlag: state.email.includes("@"),
            password: state.password,
            pwdValidationFlag: state.pwdValidationFlag
        }
    }
    if (action.type === "PWD_CHANGE") {
        return {
            email: state.email,
            emailValidationFlag: state.emailValidationFlag,
            password: action.password,
            pwdValidationFlag: action.password.length > 4
        }
    }
    if (action.type === "PWD_BLUR") {
        return {
            email: state.email,
            emailValidationFlag: state.emailValidationFlag,
            password: state.password,
            pwdValidationFlag: state.password.length > 4
        }
    }
    return {
        value: "",
        validationFlag: false
    }
};

const Random = () => {


    useEffect(() => {
        console.log("USE STATE CALLED WHEN COMPONENT RENDERS")
    }, []);


    const [formState, dispatchForm] = useReducer(formReducer, {
        email: "",
        emailValidationFlag: true,
        password: "",
        pwdValidationFlag: true
    })

    const emailChangeHandler = (event) => {
        dispatchForm({
            type: "EMAIL_CHANGE",
            email: event.target.value
        })
    }
    const emailBlurHandler = () => {
        dispatchForm({ type: "EMAIL_BLUR" })
    }

    const pwdChangeHandler = (event) => {
        dispatchForm({
            type: "PWD_CHANGE",
            password: event.target.value
        })
    }
    const pwdBlurHandler = () => {
        dispatchForm({ type: "PWD_BLUR" })
    }
    const submitHandler = () => {
        console.log(formState)
    }
    return (
        <Container>
            <Card css={{ $$cardColor: '$colors$primary' }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size={15} color="black" css={{ m: 0 }}>
                            Make some random component here:
                        </Text>
                    </Row>
                    <Spacer y={1} />
                    <Row justify="center" align="center">
                        <Col>
                            <Input status={formState.emailValidationFlag ? "primary" : "error"} onChange={emailChangeHandler} onBlur={emailBlurHandler} placeholder="Enter your email here..." />
                        </Col>
                        <Col>
                            <Input status={formState.pwdValidationFlag ? "primary" : "error"} onChange={pwdChangeHandler} onBlur={pwdBlurHandler} placeholder="Enter your password here..." />
                        </Col>
                    </Row>
                    <Spacer y={1} />
                    <Row justify="center" align="center">
                        <Button onClick={submitHandler} color="secondary" auto>Validate</Button>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )

}
export default Random;