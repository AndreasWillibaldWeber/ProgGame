import { React, useState } from 'react'
import { useColorScheme } from '@mantine/hooks';
import './App.css';

import { ColorSchemeProvider, MantineProvider, AppShell } from '@mantine/core';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import AppOverlay from './components/AppOverlay';

import { loadTasks } from './utils/LoadTasks';
import { validateTasks } from './utils/ValidateTasks';
import { pyExecutor } from './utils/PyExecutor';

function App() {

    const [name, setName] = useState('')
    const [state, setState] = useState(-2);
    const [initVal, setInitVal] = useState(0);
    const [code, setCode] = useState('');
    const [out, setOut] = useState('');
    const [tasks, setTasks] = useState(undefined);
    const [ready, setReady] = useState(false);

    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(preferredColorScheme);

    const toggleColorScheme = (value) => {
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    }

    if (tasks === undefined) {
        loadTasks().then(t => {
            if (!Array.isArray(t) || t.length < 5) {
                alert("There are not enough tasks defined!");
                setTasks([]);
                return;
            }
            if (!validateTasks(t)) {
                alert("File defining the tasks is not valid!");
                setTasks([]);
                return;
            }
            setTasks(t);
            setReady(true);
        }).catch( () => {
            alert("No file called tasks.json found!");
            setTasks([]);
        });
    }

  return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{
                                colorScheme: colorScheme, 
                                primaryColor: (colorScheme === 'dark' ? 'gray' : 'dark')
                            }} 
                            withGlobalStyles 
                            withNormalizeCSS>
                <AppShell navbar={<></>}
                        header={<AppHeader name={name}
                                        setName={setName}
                                        ready={ready}
                                        state={state}
                                        setState={setState}/>}
                        footer={<AppFooter ready={ready}
                                        state={state}
                                        setState={setState}
                                        code={code}
                                        setCode={setCode}
                                        tasks={tasks}
                                        initVal={initVal}
                                        setInitVal={setInitVal} 
                                        setOut={setOut} 
                                        executor={pyExecutor}/>}
                >
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
                            tasks={tasks}
                            setTasks={setTasks}
                            initVal={initVal}
                            setInitVal={setInitVal}
                            name={name}
                            setName={setName}/>
            </MantineProvider>
        </ColorSchemeProvider>);
}

export default App;