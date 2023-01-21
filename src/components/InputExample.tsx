import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconBrandInstagram } from '@tabler/icons';

function InputExample() {


    return (
      <div>
        <Input
        icon={<IconBrandTwitter size={16} />}
        placeholder="Your twitter"
        rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
            <div>
              <IconBrandInstagram size={18} style={{ display: 'block', opacity: 0.5 }} />
            </div>
          </Tooltip>
        }
        />
      </div>
    );
  }
  
  export default InputExample;