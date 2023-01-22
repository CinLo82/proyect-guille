import { useEffect, useState } from "react";
import { Calendar, RangeCalendar } from "@mantine/dates";
// First import locale data
import 'dayjs/locale/es';

function CalendarExample() {

    const [calendarVal, setCalendarVal] = useState(new Date());
    const [rangeval, setRangeVal] = useState<[Date, Date]>([new Date(), new Date()]);

    useEffect(() => {
        console.log(calendarVal);
    }) 

    return (
      <div>
          <Calendar 
               styles={(theme) => ({
                cell: {
                  border: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                  }`,
                },
                day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
                weekday: { fontSize: theme.fontSizes.lg },
                weekdayCell: {
                  fontSize: theme.fontSizes.xl,
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                  border: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                  }`,
                  height: 70,
                },
              })}
          locale="es" amountOfMonths={2} value={calendarVal} onChange={setCalendarVal} />;
          <RangeCalendar onChange={setRangeVal} value={rangeval} amountOfMonths={12} />
          
      </div>
    );
  }
  
  export default CalendarExample;