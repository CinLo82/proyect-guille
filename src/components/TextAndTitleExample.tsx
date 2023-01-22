import { Text, Title } from "@mantine/core";

function TextAndTitleExample() {
    return (
      <div>
        <Title order={2} >
          THIS IS A BIG 'OL TITLE
        </Title>
        <Text size="lg" weight={700} underline transform="capitalize" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vitae sed ipsa, suscipit blanditiis iure sint .
        </Text>
        <Text 
          variant="gradient"
          gradient={{ from: "red", to: "blue", deg: 138 }}
          size="xl" >Aperiam non hic perferendis aliquam pariatur 
        </Text>
        <Text>
        incidunt, minus cumque cum, modi animi! Magnam, dignissimos
        </Text>
      </div>
    );
  }
  
  export default TextAndTitleExample;