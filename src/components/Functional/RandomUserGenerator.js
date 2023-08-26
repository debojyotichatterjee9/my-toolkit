import React, { Fragment, useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { User } from "react-iconly";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

import SolidButton from "../UI/SolidButton";
import UserField from "./UserFields";
import { colorSchemes } from "../componentConfig/componentColor";
import { squareSolidButtonConfig } from "../componentConfig/buttonConfig";
import { singleFilledStandardLightMedium } from "../componentConfig/iconConfig";

const columns = [
  {
    key: "field",
    label: "Field",
  },
  {
    key: "value",
    label: "Value",
  }
];

function createRandomUser() {
  return [
    {
      id: "userId",
      label: "ID",
      value: faker.string.uuid()
    },
    {
      id: "prefix",
      label: "Prefix",
      value: faker.person.prefix()
    },
    {
      id: "firstName",
      label: "First Name",
      value: faker.person.firstName()
    },
    {
      id: "middleName",
      label: "Middle Name",
      value: faker.person.middleName()
    },
    {
      id: "lastName",
      label: "Last Name",
      value: faker.person.lastName()
    },
    {
      id: "suffix",
      label: "Suffix",
      value: faker.person.suffix()
    }, {
      id: "gender",
      label: "Gender",
      value: faker.person.gender()
    }, {
      id: "sex",
      label: "Sex",
      value: faker.person.sex()
    }, {
      id: "bio",
      label: "Bio",
      value: faker.person.bio()
    }, {
      id: "avatar",
      label: "Avatar",
      value: faker.image.avatar()
    }, {
      id: "username",
      label: "Username",
      value: faker.internet.userName()
    }, {
      id: "email",
      label: "Email",
      value: faker.internet.email().toLowerCase()
    }, {
      id: "password",
      label: "Passowrd",
      value: faker.internet.password()
    },
    {
      id: "jobTitle",
      label: "Job Title",
      value: faker.person.jobTitle()
    }, {
      id: "jobDescriptor",
      label: "Job Descripion",
      value: faker.person.jobDescriptor()
    }, {
      id: "jobType",
      label: "Job Type",
      value: faker.person.jobType()
    }, {
      id: "zodiacSign",
      label: "Zodiac",
      value: faker.person.zodiacSign()
    },
    {
      id: "birthdate",
      label: "Birth Day",
      value: new Date(faker.date.birthdate()).toLocaleDateString("en-IN", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }, {
      id: "registeredAt",
      label: "Registration Date",
      value: new Date(faker.date.past()).toLocaleDateString("en-IN", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  ];
}

const userIcon = <User {...singleFilledStandardLightMedium} />



const RandomUserGenerator = () => {
  const [user, setUser] = useState([]);


  useEffect(() => {
    setUser(createRandomUser());
  }, []);
  console.log(user)
  return (
    <Fragment>
      <Table
        aria-label="Controlled table example with dynamic content"
        selectionMode="multiple"
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={user}>
          {(item) => (
            <TableRow key={item.key}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Fragment>
  )

}

export default RandomUserGenerator;