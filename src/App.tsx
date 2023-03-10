import {ColorSchemeProvider, MantineProvider, ColorScheme, Paper } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import AppShellExample from './components/AppShellExample';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className='App'>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}}>
        <Paper>
        <AppShellExample />
        </Paper>
        </MantineProvider>
        </ColorSchemeProvider>
    </div>
  );

}

export default App;



