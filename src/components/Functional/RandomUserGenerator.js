import React, { Fragment, useState, useEffect } from "react";
import { faker } from '@faker-js/faker';
import { User } from "react-iconly";
import { Input, Grid, Card, Row, Text } from "@nextui-org/react";

import SolidButton from "../UI/SolidButton";
import UserField from "./UserFields";
import { colorSchemes } from "../componentConfig/componentColor";
import { squareSolidButtonConfig } from "../componentConfig/buttonConfig";
import { singleFilledStandardLightMedium } from "../componentConfig/iconConfig";

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        prefix: faker.person.prefix(),
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        suffix: faker.person.suffix(),
        gender: faker.person.gender(),
        sex: faker.person.sex(),
        bio: faker.person.bio(),
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        email: faker.internet.email().toLowerCase(),
        password: faker.internet.password(),
        jobDescriptor: faker.person.jobDescriptor(),
        jobTitle: faker.person.jobTitle(),
        jobType: faker.person.jobType(),
        zodiacSign: faker.person.zodiacSign(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const userIcon = <User {...singleFilledStandardLightMedium} />



const RandomUserGenerator = () => {
    const [user, setUser] = useState({
        "userId": "",
        "prefix": "",
        "firstName": "",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "gender": "",
        "sex": "",
        "bio": "",
        "avatar": "",
        "username": "",
        "email": "",
        "password": "",
        "jobDescriptor": "",
        "jobTitle": "",
        "jobType": "",
        "zodiacSign": "",
        "birthdate": "",
        "registeredAt": ""
    });


    useEffect(() => {
        setUser(createRandomUser());
        console.log(user)
    }, []);
    return (
        <Fragment>
            <Grid.Container gap={2} justify="center" >

                <Grid>
                    <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src={user.avatar}
                                objectFit="cover"
                                width="100%"
                                height={140}
                                alt={user.username}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>{user.username}</Text>
                                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                    {/* {item.price} */}
                                </Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={4}>
                { Object.entries(user).map(item => {
                    return (
                        <UserField key={Math.random()} fieldName={item[0]} fieldValue={item[1]}/>
                    )
                })
                }
                {/* <Grid>
                    <Input

                        labelLeft="UserID"
                        labelRight={copyIcon}
                        value={user.userId}
                    />
                </Grid>
                <Grid>
                    <Input
                        labelLeft="Username"
                        labelRight={copyIcon}
                        value={user.username}
                    />
                </Grid>
                <Grid>
                    <Input
                        labelLeft="Email"
                        labelRight={copyIcon}
                        value={user.email}
                    />
                </Grid>
                <Grid>
                    <Input
                        labelLeft="Password"
                        labelRight={copyIcon}
                        value={user.password}
                    />
                </Grid> */}
            </Grid.Container>
        </Fragment>
    )

}

export default RandomUserGenerator;