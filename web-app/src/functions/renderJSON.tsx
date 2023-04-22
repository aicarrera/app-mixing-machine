import { VStack, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, SimpleGrid, Button } from "@chakra-ui/react";
import  NumberInput from "../components/NumberInput";
import  YesNo from "../components/YesNo";
import * as constants from "../config/constants";

export function renderJSON(jsonData, userid) {

  const handleTriggerClick = async (elementId: string, userId: string) => {
    try {
      const response = await fetch(constants._API_URL +'interactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          elementId: elementId
        })
      });
      if (response.ok) {
        console.log('Interaction recorded successfully');
      } else {
        console.log('Error recording interaction');
      }
    } catch (err) {
  console.error(err);
  }
}
  const { type, props, children } = jsonData;
  console.log(jsonData)
  switch (type) {
    case "VStack":
      return (
        <VStack {...props}>
          {children.map((child) => renderJSON(child,userid))}
        </VStack>
      );
      case "Heading":
        return <Heading {...props}>{props.children}</Heading>;
      case "Accordion":
        return (
          <Accordion {...props}>
            {children.map((child) => renderJSON(child,userid))}
          </Accordion>
        );
      case "AccordionItem":
        return (
          <AccordionItem {...props}>
            {children.map((child) => renderJSON(child,userid))}
          </AccordionItem>
        );
      case "AccordionButton":
        return (
          <AccordionButton {...props} onClick={() => handleTriggerClick(props.id, userid)}>{props.children}</AccordionButton>
        );
        case "AccordionPanel":
          return (
            <AccordionPanel {...props}>
              {renderJSON(children,userid)}
            </AccordionPanel>
          );
      case "NumberInput":
        return <NumberInput {...props} />;
      case "YesNo":
        return <YesNo {...props} />;
      case "SimpleGrid":
        return (
          <SimpleGrid {...props}>
           
          </SimpleGrid>
        );
      case "Button":
        return <Button {...props} onClick={() => handleTriggerClick(props.id, userid)}>{props.children}</Button>;
    default:
      return null;
  }
}


