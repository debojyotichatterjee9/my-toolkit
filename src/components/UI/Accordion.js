import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import capitalizeFirstLetter from "../../utils/capitalizeFirst";

const CustomAccordion = (props) => {
    const { sections, data } = props;
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <Accordion variant="splitted">
            {sections.map(section => (
                <AccordionItem key={section} aria-label="Accordion 1" title={capitalizeFirstLetter(section)}>
                    {Object.keys(data[section]).map(elem =><p>{`${capitalizeFirstLetter(elem)}: ${data[section][elem]}`}</p>)}
                </AccordionItem>
            ))}


        </Accordion>
    );
}

export default CustomAccordion;