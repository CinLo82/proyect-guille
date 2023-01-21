import { 
    Grid, 
    Card,
    Image,
    Text,
    Badge,
    Button, 
    Group, 
    useMantineTheme  
} from "@mantine/core";

function Cards() {

    const theme = useMantineTheme();

    return (
      <div className='App'>
        <Grid justify="space-around">
            <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
            <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="https://images.pexels.com/photos/15190699/pexels-photo-15190699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={160} alt="Andrea Garibay"
/>
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
            On Sale
           </Badge>
           </Group>

           <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
           </Text>

           <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
               Book classic tour now
           </Button>
           </Card>
        </Grid.Col>

        <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
            <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="https://images.pexels.com/photos/15190699/pexels-photo-15190699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={160} alt="Andrea Garibay"
/>
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
            On Sale
           </Badge>
           </Group>

           <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
           </Text>

           <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
               Book classic tour now
           </Button>
           </Card>
        </Grid.Col>

        <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
            <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src="https://images.pexels.com/photos/15190699/pexels-photo-15190699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={160} alt="Andrea Garibay"
/>
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
            On Sale
           </Badge>
           </Group>

           <Text size="sm" style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
           </Text>

           <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
               Book classic tour now
           </Button>
           </Card>
        </Grid.Col>

        </Grid>
      </div>
    );
  }
  
  export default Cards;