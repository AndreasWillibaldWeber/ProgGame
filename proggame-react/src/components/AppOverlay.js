import { useState } from 'react';
import { Button, Overlay, List, ThemeIcon, Stack, Card, Text, Title, Space } from '@mantine/core';
import { AlertCircle, Accessible } from 'tabler-icons-react';

import { fisherYatesShuffle } from '../utils/FisherYatesShuffle';
import { storeName, restoreNames } from '../utils/NameStorage';

export default function AppOverlay({state, setState, setOut, tasks, setTasks, initVal, setInitVal, name, setName}) {

    const [names, setNames] = useState(undefined);

    const challange = `Challenge! ${name} wants to solve five random tasks in a row!`;
    const congratulations = `Congratulations! ${name} has solved five random tasks in a row!`;
    const failured = `Unfortunately failed! Try it again ${name}!`;
    
    const saveName = () => {
        storeName(name).catch( e => {
            alert("Failed to save name!")
        });
    }

    const loadNames = () => {
        restoreNames().then( n => {
            setNames(n);
        }).catch( () => setNames([]));
    }

    const shuffle = () => {
        setTasks(fisherYatesShuffle(tasks));
    }

    const clear = () => {
        setOut("");
        setInitVal(initVal + 1);
    };

    return (state === -3 || state === -1 || state === 5) ? (
        <Overlay blur={15} center>
            <Stack>
                {state === -1 ?  <Card>
                                    <Title color="gray.6">Challenge Rules</Title>
                                    <Space h="xl"/>
                                    <List spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <ThemeIcon color="red.5" size={28} radius="xl">
                                                <AlertCircle size="20" />
                                            </ThemeIcon>
                                        }
                                    >
                                        <List.Item><Text fz="xl" color="gray.6">Do not use print()!</Text></List.Item>
                                        <List.Item><Text fz="xl" color="gray.6">The code must be testable!</Text></List.Item>
                                        <List.Item><Text fz="xl" color="gray.6">Code must work the first time it is executed!</Text></List.Item>
                                    </List>
                                    <Space h="xl"/>
                                </Card>: state === 5 ?  <Card>
                                                            <Title color="gray.6">Challenge Winner</Title>
                                                            <Space h="xl"/>
                                                            <List spacing="xs"
                                                                size="sm"
                                                                center
                                                                icon={
                                                                    <ThemeIcon color="green.5" size={28} radius="xl">
                                                                        <Accessible size="20" />
                                                                    </ThemeIcon>
                                                                }
                                                            >
                                                                {names.map(n => {
                                                                    const keyname = n.split('-')[1];
                                                                    return (<List.Item>
                                                                                <Text fz="xl" color="gray.6">{keyname}</Text>
                                                                            </List.Item>);
                                                                })}
                                                                <List.Item ><Text fz="xl" color="gray.6">{name}</Text></List.Item>
                                                            </List>
                                                            <Space h="xl"/>
                                                        </Card> : <></>}
                <Button size="xl" color={state === 5 ? 'green.5' : state === -1 ? 'orange.5' : 'red.5'}
                        radius="xl" 
                        onClick={() => state === -3 || state === 5 ? (saveName(), setState(-2), setName(""), clear()) : (loadNames(), shuffle(), setState(0), clear())}
                >
                    {state === 5 ? congratulations : state === -3 ? failured : challange}
                </Button>
            </Stack>
        </Overlay>
    ) : <></>;

}