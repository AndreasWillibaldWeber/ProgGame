import { Button, Overlay } from '@mantine/core';

export default function AppOverlay({state, setState, setOut, initVal, setInitVal, name, setName}) {

    const challange = `Challenge! ${name} wants to solve five random tasks in a row!`;
    const congratulations = `Congratulations! ${name} has solved five random tasks in a row!`;
    const failured = `Unfortunately failed! Try it again ${name}!`;

    const clear = () => {
        setOut("");
        setInitVal(initVal + 1)
    };

    return (state === -3 || state === -1 || state === 5) ? (
        <Overlay blur={15} center>
            <Button color={state === 5 ? 'green.5' : 'red.5'}
                    radius="xl" 
                    onClick={() => state === -3 || state === 5 ? (setState(-2), setName(""), clear()) : (setState(0), clear())}>
                {state === 5 ? congratulations : state === -3 ? failured : challange}
            </Button>
        </Overlay>
    ) : <></>;

}