import { useEffect, useState } from 'react';
import {
    Chip
} from "@mantine/core";

function ChipsExample() {

    const [value, setValue] = useState(['react']);

    useEffect(() => {
        console.log(value);
    })

    return (
      <div>
        <Chip.Group color="pink" value={value} onChange={setValue} multiple>
            <Chip value="react">React</Chip>
            <Chip value="ng">Angular</Chip>
            <Chip value="svelte">Svelte</Chip>
            <Chip value="vue">Vue</Chip>
       </Chip.Group>
      </div>
    );
  }
  
  export default ChipsExample;