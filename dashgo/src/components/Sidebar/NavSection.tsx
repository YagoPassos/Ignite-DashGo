import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { Children } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSection{
    title: string,
    children: React.ReactNode;
}

export function NavSection( props: NavSection) {
    return (
        <Box>
        <Text fontWeight='bold' fontSize='small' color='gray.400'>
            {props.title}
        </Text>
        <Stack spacing='4' mt='8' align='stretch'>
           {props.children}
        </Stack>
    </Box>
    )
}
