import { Text, SimpleGrid, Group, Button, Space, Footer } from '@mantine/core';
import { PlayerPlay, Trash, Copyright } from 'tabler-icons-react';

export default function AppFooter({code, initVal, setInitVal, setOut, executor}) {

    const executeCode = async () => {
        const out = await executor(code)
        setOut(out);
    }

    const clear = () => {
        setOut("");
        setInitVal(initVal + 1)
    }

    return (<Footer height={70} p="xs">
                      <SimpleGrid cols={3}>
                        <Group position='left'>
                          <Space w="xs"/>
                          <Copyright/><Text fw={500} fz="lg">Andreas W. Weber</Text>
                        </Group>
                        <Group></Group>
                        <Group position='right'>
                          <Button color="red" onClick={clear}><Trash/></Button>
                          <Button color="green" onClick={executeCode}><PlayerPlay/></Button>
                          <Space w="xs"/>
                        </Group>
                      </SimpleGrid>
                    </Footer>);
}