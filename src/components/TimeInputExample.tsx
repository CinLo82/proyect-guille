import { useEffect, useState } from "react";
import { TimeInput, TimeRangeInput } from "@mantine/dates";
import { GithubIcon } from "@mantine/ds";
import dayjs from 'dayjs';


function TimeInputExample() {

    const [timeInputVal, setTimeInputVal] = useState(new Date());

    useEffect(() => {
        console.log(timeInputVal);
    }) 

    const now = new Date();
    const then = dayjs(now).add(30, 'minutes').toDate();
    const [rangeVal, setRangeVal] = useState<[Date, Date]>([now, then]);

    return (
      <div>

        <TimeInput 
            icon={<GithubIcon />} 
            styles={(theme) => ({
                icon: {
                    color: theme.colors.orange[7]
                },
                filledVariant: {
                    backgroundColor: "theme.colors.blue[5]"
                }
        })} format="12" 
            label="This is a label" 
            description="This is a description"
            value={timeInputVal} 
            onChange={setTimeInputVal} />

        <TimeRangeInput 
            label="Appointment time" 
            value={rangeVal} 
            onChange={setRangeVal} clearable />  
         
      </div>
    );
  }
  
  export default TimeInputExample;