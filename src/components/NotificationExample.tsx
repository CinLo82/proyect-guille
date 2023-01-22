import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { useNotifications, showNotification } from "@mantine/notifications";
import axios from 'axios';
import { IconCheck } from '@tabler/icons';


function NotificationExample() {
    const notifications = useNotifications();
    const [randomPlayer, setRandomPlayer] = useState({ first_name: "" });

    const getPlayerName = () => {
        axios.get("http://www.balldontlie.io/api/v1/players/237")
        .then((res) => {
            setRandomPlayer(res.data);
            showNotification({
                message: "WE GOT YA DATA!",
                title: "WHERE SOME DATA!",
                color: "green",
                icon: <IconCheck />
            })
        })
    }

    return (
      <div>

        <Button 
            variant="outline"
            onClick={() => {
                showNotification({
                    message: "WE ARE GETTING YOUR DATA"
                })
                getPlayerName()
            }}
        >
            Show Data
        </Button>
         { randomPlayer. first_name }
      </div>
    );
  }
  
  export default NotificationExample;