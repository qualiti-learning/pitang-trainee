import {
    AppShell,
    Navbar,
    Header,
    Group,
    ActionIcon,
    useMantineColorScheme,
} from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";
import MainLinks from "./MainLinks";
import { Logo } from "./Logo";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                    <Navbar.Section grow mt="xs">
                        <MainLinks />
                    </Navbar.Section>
                    <Navbar.Section>{/* <User /> */}</Navbar.Section>
                </Navbar>
            }

            header={
                <Header height={60}>
                    <Group sx={{ height: "100%" }} px={20} position="apart">
                        <Logo colorScheme={colorScheme} />
                        <ActionIcon
                            variant="default"
                            onClick={() => toggleColorScheme()}
                            size={30}
                        >
                            {colorScheme === "dark" ? (
                                <Sun size={16} />
                            ) : (
                                <MoonStars size={16} />
                            )}
                        </ActionIcon>
                    </Group>
                </Header>
            }
            styles={(theme) => ({
                main: {
                    height: "90vh",
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Outlet />
        </AppShell>
    );
};

export default Layout;