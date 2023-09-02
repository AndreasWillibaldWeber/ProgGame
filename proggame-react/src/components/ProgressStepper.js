import { useState, useEffect } from 'react';
import { Stepper, rem } from '@mantine/core';

export default function ProgressStepper({state}) {
   
    const [active, setActive] = useState(0);

    useEffect(() => {
      if (!state) {
        setActive(0);
        return;
      }
      setActive(state);
    }, [state]); // eslint-disable-line

    return (
        <Stepper color="gray.7" active={active} breakpoint="sm" iconPosition="right" styles={{
            stepBody: {
              display: 'none',
            },
    
            step: {
              padding: 0,
            },
    
            stepIcon: {
              borderWidth: rem(4),
            },
    
            separator: {
              marginLeft: rem(-2),
              marginRight: rem(-2),
              height: rem(10),
            },
          }}>
        <Stepper.Step color="red.5"/>
        <Stepper.Step color="orange.5"/>
        <Stepper.Step color="yellow.5"/>
        <Stepper.Step color="lime.5"/>
        <Stepper.Step color="green.5"/>
        </Stepper>
    );
}