import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function SchemaToggle() {
  
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <SegmentedControl
                value={colorScheme}
                onChange={(value) => toggleColorScheme(value)}
                data={[
                    {
                        value: 'light',
                        label: (
                            <Center>
                            <IconSun size="1rem" stroke={1.5} />
                            </Center>
                        ),
                    },
                    {
                        value: 'dark',
                        label: (
                            <Center>
                            <IconMoon size="1rem" stroke={1.5} />
                            </Center>
                        ),
                    },
                ]}
            />
        </Group>
    );
}