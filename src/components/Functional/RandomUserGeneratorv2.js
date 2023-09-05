import React, { useState, useEffect } from "react";
import CustomAccordion from "../UI/Accordion";
import userSections from "../componentConfig/userSectionConfig";



const RandomUserGeneratorv2 = () => {
    const [loadngFlag, setLoadingFlag] = useState(true);
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

        }).catch(error => console.log(error));
    }, []);
    const sections = Object.keys(user);
    return (
        <React.Fragment>
            {!loadngFlag
                ?
                <CustomAccordion sections={sections} data={user} />
                :
                <p>Loading...</p>}
        </React.Fragment>
    )
}

export default RandomUserGeneratorv2;