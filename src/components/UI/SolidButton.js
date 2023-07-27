import React from "react";
import { Button } from "@nextui-org/react";

const SolidButton = (props) => {
    const additionalConfig = props.customOptions;
    console.log(<Button {...additionalConfig} color={props.color} icon={props.icon}>{props.label}</Button>)
    return <Button auto shadow ripple color={props.color} icon={props.icon}>{props.label}</Button>;
}

export default SolidButton;