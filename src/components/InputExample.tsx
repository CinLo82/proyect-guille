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

      
        <Input.Wrapper
        id="input-demo"
        withAsterisk
        label="Credit card information"
        description="Please enter your credit card information, we need some money"
        error="Your credit card expired"
        size="md"
        >
        <Input id="input-demo" placeholder="Your email" />
        </Input.Wrapper>

      </div>
    );
  }
  
  export default InputExample;