import { Button, Styles } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useState } from 'react';

function Buttons() {

    const [ loading, setloading] = useState(false);

    const handleClick = () => {
        setloading(true)
    }

    return (
      <div className='App' >
        <Button leftIcon={<IconSun />} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} >Indigo cyan</Button>
        <Button loading={loading} onClick={handleClick} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
        <Button component='a' href='http://www.google.com' target="_blank" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
        <Button styles={(theme) => ({
            root: {
                border: 0,
                height: 500,
                paddingRight:69,
                fontFamily: "monospace",
                '&:hover': {
                    paddingLeft: 100
                }
            }
        })} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
        <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
      </div>
    );
  }
  
  export default Buttons;