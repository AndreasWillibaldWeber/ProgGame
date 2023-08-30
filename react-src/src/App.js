import { React, useState } from 'react'
import { useColorScheme } from '@mantine/hooks';
import './App.css';

import { ColorSchemeProvider, MantineProvider, AppShell, Button, Overlay } from '@mantine/core';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';

import { pyExecutor } from './utils/PyExecutor';

function App() {

  const [name, setName] = useState('')
  const [state, setState] = useState(-2);
  const [initVal, setInitVal] = useState(0);
  const [code, setCode] = useState('');
  const [out, setOut] = useState('');

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{
                              colorScheme: colorScheme, 
                              primaryColor: (colorScheme === 'dark' ? 'gray' : 'dark')
                            }} 
                            withGlobalStyles 
                            withNormalizeCSS>
              <AppShell
                  navbar={<></>}
                  header={<AppHeader name={name}
                                    setName={setName}
                                    state={state}
                                    setState={setState}/>}
                  footer={<AppFooter state={state}
                                    setState={setState}
                                    code={code}
                                    initVal={initVal}
                                    setInitVal={setInitVal} 
                                    setOut={setOut} 
                                    executor={pyExecutor}/>}>
                {<AppMain state={state}
                          out={out}
                          initVal={initVal}
                          setCode={setCode}
                          theme={colorScheme}/>}
              </AppShell>
              { (state === -1 || state === 5) && (
                <Overlay blur={15}
                        center>
                  <Button color={state === 5 ? 'green.5' : 'red.5'}
                        radius="xl" 
                        onClick={() => state === 5 ? (setState(-2), setName("")) : setState(0)}>
                    {state === 5 ? 'Congratulations! ' + name + ' has solved five random tasks in a row!' : 'Challenge! ' + name + ' wants to solve five random tasks in a row!'}
                  </Button>
                </Overlay>
              )}
            </MantineProvider>
          </ColorSchemeProvider>);
}

export default App;