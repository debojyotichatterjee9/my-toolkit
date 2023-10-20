import React from "react";

import User from "../models/user.model";


const RandomUser: React.FC<{user: User}> = (props) => {
    return (
        <React.Fragment>
            <h1>This is a sample heading for {props.user.firstName} {props.user.lastName}...</h1>
        </React.Fragment>
    )
}

export default RandomUser;