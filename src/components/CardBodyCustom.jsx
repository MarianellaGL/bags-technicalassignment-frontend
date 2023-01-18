import { Text, CardBody, Image } from "@chakra-ui/react";

const CardBodyCustom = () => {
    return (<CardBody>
        <Text className="text-card"> By Lendistry</Text>
        <div className="image-position">
        <Image className="image" src={require("../assets/2838912.png")}></Image>
        <Text  className="text-card"> Location</Text>
        </div>
        <Text  className="text-card"> Get Founded in  <Text className="text-secondary"> 12 days</Text></Text>
    </CardBody>);
}

export default CardBodyCustom;