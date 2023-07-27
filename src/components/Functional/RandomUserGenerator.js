import React, { Fragment } from "react";
import { faker } from '@faker-js/faker';
import { User, Paper } from "react-iconly";
import { Input, Grid, Card, Row, Text } from "@nextui-org/react";

import SolidButton from "../UI/SolidButton";
import { colorSchemes } from "../componentConfig/componentColor";
import { squareSolidButtonConfig } from "../componentConfig/buttonConfig";
import { singleFilledStandardLightMedium } from "../componentConfig/iconConfig";

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email().toLowerCase(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const userIcon = <User {...singleFilledStandardLightMedium} />
const copyIcon = <Paper set="curved" primaryColor="blueviolet" />


const RandomUserGenerator = () => {
    const user = createRandomUser();
    return (
        <Fragment>
            {/* <p>{user.userId}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.avatar}</p>
            <p>{user.password}</p>
            <SolidButton customOptions={squareSolidButtonConfig} icon={userIcon} label="Generate New User" color={colorSchemes.gradient} />  */}
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
                <Grid>
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
                </Grid>
            </Grid.Container>
        </Fragment>
    )

}

export default RandomUserGenerator;