import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../UI/Icons.jsx";
import { AcmeLogo } from "../UI/AcmeLogo.jsx";

export default function Header() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  const toolOptions = [
    {
      key: "tool1",
      name: "Tool 1",
      description: "Add Description",
      startContent: icons.scale
    },
    {
      key: "tool2",
      name: "Tool 2",
      description: "Add Description",
      startContent: icons.activity
    },
    {
      key: "tool3",
      name: "Tool 3",
      description: "Add Description",
      startContent: icons.flash
    },
    {
      key: "tool4",
      name: "Tool 4",
      description: "Add Description",
      startContent: icons.server
    },
    {
      key: "tool5",
      name: "Tool 5",
      description: "Add Description",
      startContent: icons.user
    }
  ]

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Tools
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {toolOptions.map(tool => (
              <DropdownItem
                key={tool.key}
                description={tool.description}
                startContent={tool.startContent}
              >
                {tool.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Reach Me out!!!
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
