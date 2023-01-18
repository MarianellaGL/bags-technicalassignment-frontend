import { Card, Divider, Tooltip } from "@chakra-ui/react";
import CardBodyCustom from "./CardBodyCustom";
import CardFooterCustom from "./CardFooterCustom";
import CardHeaderCustom from "./CardHeaderCustom";

const CardComponent = () => {
    return (
        <>  <div>
            <Card>
            <CardHeaderCustom />
            <CardBodyCustom />
            <Divider />
            <CardFooterCustom />
        </Card>
        </div>

        </>);
}

export default CardComponent;