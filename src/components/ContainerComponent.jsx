import { Box, Button, Tooltip, Text } from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import TextComponent from "./TextComponent";

const ContainerComponent = () => {


    return (
        <div className="container">
               <div className="tooltip-goodfit">
                <Tooltip>Good Fit</Tooltip>
            </div>
        <Box className="container-component" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
   
            <CardComponent />
            <div className="button-title">
            <Text> About the lender</Text>
            <Button className="button-learnmore">Learn More</Button>
            </div>
            <div className="text-alignment">
                <TextComponent />
            </div>
            <div className="container-tooltip">
             <div className="tooltip-lender">
            <Tooltip className="tooltip-lender">Lender Benefit</Tooltip>
            </div>
            <div className="tooltip-lender">
            <Tooltip className="tooltip-lender">Lender Benefit</Tooltip>
            </div>
            <div className="tooltip-lender">
            <Tooltip className="tooltip-lender">Lender Benefit</Tooltip>
            </div>
            </div>

        </Box>
        </div>
    );
}

export default ContainerComponent;