import { Header, Title, TextInput, SimpleGrid, Group, Button, Space } from '@mantine/core';
import { FileCode, Run, Repeat } from 'tabler-icons-react';
import SchemaToggle from './SchemaToggle';

export default function AppHeader() {
    return (<Header height={70} p="xs">
                <SimpleGrid cols={3}>
                <Group position='left'>
                    <Space w="xs"/>
                    <FileCode size={36} strokeWidth={3}/>
                    <Title>Programming Game</Title>
                </Group>
                <SchemaToggle/>
                <Group position='right'>
                    <TextInput placeholder='Insert Name'></TextInput>
                    <Button color="green"><Run/></Button>
                    <Button color="orange"><Repeat/></Button>
                    <Space w="xs"/>
                </Group>
                </SimpleGrid>
            </Header>);
}