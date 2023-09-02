import { Text, SimpleGrid, Group, Button, Space, Footer } from '@mantine/core';
import { PlayerPlay, Trash, Copyright } from 'tabler-icons-react';

export default function AppFooter({state, setState, code, setCode, initVal, setInitVal, setOut, executor}) {

    const executeCode = async () => {
        const out = await executor(code)
        setOut(out);
        if (state < 0 || state === 5) {
            return;
        }
        if (out.trim().toLowerCase() === "true") {
            setState(state + 1);
            clear();
            return;
        }
        setState(-3);
        setOut("");
        setCode("");
    };

    const clear = () => {
        setOut("");
        setInitVal(initVal + 1)
    };

    return (<Footer height={70} p="xs">
                <SimpleGrid cols={3}>
                    <Group position='left'>
                        <Space w="xs"/>
                        <Copyright/><Text fw={500} fz="lg">Andreas W. Weber</Text>
                    </Group>
                    <Group></Group>
                    <Group position='right'>
                        <Button disabled={state === 5} color="red" onClick={clear}><Trash/></Button>
                        <Button disabled={state === 5} color="green" onClick={executeCode}><PlayerPlay/></Button>
                        <Space w="xs"/>
                    </Group>
                </SimpleGrid>
            </Footer>);
}