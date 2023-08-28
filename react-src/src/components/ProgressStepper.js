import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';

export default function ProgressStepper() {
   
    const [active, setActive] = useState(0); // eslint-disable-line

    return (
        <Stepper active={active} breakpoint="sm" iconPosition="right" styles={{
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
        <Stepper.Step/>
        <Stepper.Step/>
        <Stepper.Step/>
        <Stepper.Step/>
        <Stepper.Step/>
        </Stepper>
    );
}