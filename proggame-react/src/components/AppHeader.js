import { Header, Title, TextInput, SimpleGrid, Group, Button, Space, Text} from '@mantine/core';
import { FileCode, Run, Repeat } from 'tabler-icons-react';
import SchemaToggle from './SchemaToggle';

export default function AppHeader({state, setState, ready, name, setName}) {

    const startState = () => {
        if (state === 5) {
            resetState();
            return;
        }
        if (!ready) {
            alert("No tasks loaded!");
            return;
        }
        setState(-1);
    }

    const resetState = () => {
        setState(-2);
        setName('');
    }

    return (<Header height={70} p="xs">
                <SimpleGrid cols={3}>
                <Group position='left'>
                    <Space w="xs"/>
                    <FileCode size={36} strokeWidth={3}/>
                    <Title>Programming Game</Title>
                </Group>
                <SchemaToggle/>
                {ready ?
                    <Group position='right'>
                        <TextInput disabled={!ready || state >= 0}
                                value={name} onChange={(event) => setName(event.currentTarget.value)}
                                placeholder='Insert Name'></TextInput>
                        <Button disabled={state >= 0 || !name} 
                                color="green"
                                onClick={startState}><Run/></Button>
                        <Button disabled={state < 0}
                                color="orange" 
                                onClick={resetState}><Repeat/></Button>
                        <Space w="xs"/>
                    </Group> :
                    <Group position='right'>
                        <Text color='red'>No tasks loaded!</Text>
                        <Space w="xs"/>
                    </Group>}
                </SimpleGrid>
            </Header>);
}