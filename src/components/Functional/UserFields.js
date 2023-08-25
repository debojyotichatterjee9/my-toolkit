import React from "react";
import { Input } from "@nextui-org/react";
import { Paper } from "react-iconly";
import { faker } from "@faker-js/faker";


const copyIcon = <Paper set="curved" primaryColor="blueviolet" />

const UserField = (props) => {
  return (
      <Input
        // key={Math.random()}
        labelLeft={props.fieldName}
        labelRight={copyIcon}
        value={props.fieldValue}
      />
  )
}

export default UserField;