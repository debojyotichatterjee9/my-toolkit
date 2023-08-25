import React, { Fragment, useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { User } from "react-iconly";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


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
     
    </Fragment>
  )

}

export default RandomUserGenerator;