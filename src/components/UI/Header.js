import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function Header() {
    
    const variant = "floating";

    return (
            <Navbar isBordered variant={variant}>
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        Custom Logo and text
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Option1</Navbar.Link>
                    <Navbar.Link isActive href="#">Option2</Navbar.Link>
                    <Navbar.Link href="#">Option3</Navbar.Link>
                    <Navbar.Link href="#">Option4</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
    );
}
