import { React, useState } from 'react'
import { useColorScheme } from '@mantine/hooks';
import './App.css';

import { ColorSchemeProvider, MantineProvider, AppShell } from '@mantine/core';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppOverlay from './components/AppOverlay';

import { loadTasks } from './utils/LoadTasks';
import { pyExecutor } from './utils/PyExecutor';

function App() {

  const [name, setName] = useState('')
  const [state, setState] = useState(-2);
  const [initVal, setInitVal] = useState(0);
  const [code, setCode] = useState('');
  const [out, setOut] = useState('');
  const [tasks, setTasks] = useState([]);
  const [ready, setReady] = useState(false);

  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  if (tasks.length === 0) {
    loadTasks().then(t => {
      setTasks(t);
      setReady(true);
    });
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
                                    ready={ready}
                                    state={state}
                                    setState={setState}/>}
                  footer={<AppFooter state={state}
                                    setState={setState}
                                    code={code}
                                    setCode={setCode}
                                    initVal={initVal}
                                    setInitVal={setInitVal} 
                                    setOut={setOut} 
                                    executor={pyExecutor}/>}>
                {<AppMain ready={ready}
                          state={state}
                          out={out}
                          initVal={initVal}
                          tasks={tasks}
                          setCode={setCode}
                          theme={colorScheme}/>}
              </AppShell>
              <AppOverlay state={state}
                          setState={setState}
                          setOut={setOut}
                          initVal={initVal}
                          setInitVal={setInitVal}
                          name={name}
                          setName={setName}/>
            </MantineProvider>
          </ColorSchemeProvider>);
}

export default App;