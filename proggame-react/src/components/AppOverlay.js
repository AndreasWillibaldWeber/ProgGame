import { Button, Overlay } from '@mantine/core';

export default function AppOverlay({state, setState, name, setName}) {

    const challange = `Challenge! ${name} wants to solve five random tasks in a row!`;
    const congratulations = `Congratulations! ${name} has solved five random tasks in a row!`;

    return (state === -1 || state === 5) ? (
        <Overlay blur={15} center>
            <Button color={state === 5 ? 'green.5' : 'red.5'}
                    radius="xl" 
                    onClick={() => state === 5 ? (setState(-2), setName("")) : setState(0)}>
                {state === 5 ? congratulations : challange}
            </Button>
        </Overlay>
    ) : <></>;

}