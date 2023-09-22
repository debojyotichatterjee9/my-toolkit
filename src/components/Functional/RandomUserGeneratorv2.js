import React, { useState, useEffect } from "react";
import CustomAccordion from "../UI/Accordion";
import userSections from "../componentConfig/userSectionConfig";



const RandomUserGeneratorv2 = () => {
    const [loadngFlag, setLoadingFlag] = useState(true);
    const [error, setError] = useState({
        flagValue: false,
        message: null
    });
    const [user, setUser] = useState({
        basic: {},
        contact: {},
        location: {},
        personal: {},
        login: {},
    });
    useEffect(() => {
        fetch('https://randomuser.me/api/').then(async response => {
            const responseBody = await response.json();
            const userInfo = responseBody.results[0];
            setUser({
                basic: {
                    gender: userInfo.gender,
                    title: userInfo.name.title,
                    first: userInfo.name.first,
                    last: userInfo.name.last
                },
                contact: {},
                location: {},
                personal: {},
                login: {},
            });
            setLoadingFlag(false);
            setError(false);

        }).catch(error => {
            setLoadingFlag(false);
            setError({
                flagValue: true,
                message: "Unable to fetch data at the moment. Please try v1 or try again later!!"
            });

        });
    }, []);
    const sections = Object.keys(user);

    if (loadngFlag) {
        return (
            <React.Fragment>
                <p>Loading...</p>
            </React.Fragment>
        )
    }
    if (error.flagValue) {
        return (
            <React.Fragment>
                <p>{error.message}</p>
            </React.Fragment>
        )
    }
    return <CustomAccordion sections={sections} data={user} />

}

export default RandomUserGeneratorv2;