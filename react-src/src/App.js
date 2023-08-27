import { React, useState } from 'react'
import { useColorScheme } from '@mantine/hooks';
import './App.css';

import { ColorSchemeProvider, MantineProvider, AppShell } from '@mantine/core';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';

import {pyExecutor} from './utils/PyExecutor';

function App() {

  const [initVal, setInitVal] = useState(0);
  const [code, setCode] = useState('');
  const [out, setOut] = useState('');

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{
                              colorScheme: colorScheme, 
                              primaryColor: (colorScheme === 'dark' ? 'gray' : 'dark')
                            }} 
                            withGlobalStyles 
                            withNormalizeCSS>
              <AppShell
                  navbar={<></>}
                  header={<AppHeader/>}
                  footer={<AppFooter code={code}
                                    initVal={initVal}
                                    setInitVal={setInitVal} 
                                    setOut={setOut} 
                                    executor={pyExecutor}/>}>
                {<AppMain out={out}
                          initVal={initVal}
                          setCode={setCode}
                          theme={colorScheme}/>}
              </AppShell>
            </MantineProvider>
          </ColorSchemeProvider>);
}

export default App;