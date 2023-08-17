import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
  Text,
  Group,
  ActionIcon,
  Menu
} from '@mantine/core';
import { IconUser, IconMessage, IconBell } from '@tabler/icons-react';
import { useState } from 'react';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      padding="md"
      header={
        <Header height={{ base: 50, md: 70 }} p="md" bg="white">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <MediaQuery smallerThan="md" styles={{ fontSize: 20 }}>
              <Text color="black" fz={30} fw="bold">
                Book project
              </Text>
            </MediaQuery>

            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Menu
                shadow="md"
                width={200}
                opened={opened}
                offset={15}
                onChange={setOpened}
                withArrow
                withinPortal
              >
                <Menu.Target>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item icon={<IconBell />}>Notifications</Menu.Item>
                  <Menu.Item icon={<IconMessage />}>Messages</Menu.Item>
                  <Menu.Item icon={<IconUser />}>Profile</Menu.Item>

                  <Menu.Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                </Menu.Dropdown>
              </Menu>
            </MediaQuery>

            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Group>
                <ActionIcon>
                  <IconBell />
                </ActionIcon>

                <ActionIcon>
                  <IconMessage />
                </ActionIcon>

                <ActionIcon>
                  <IconUser />
                </ActionIcon>
              </Group>
            </MediaQuery>
          </div>
        </Header>
      }
    >
      {outlet}
    </AppShell>
  );
};

export default AppLayout;
