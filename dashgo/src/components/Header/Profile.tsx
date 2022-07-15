import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align='center'>
        <Box mr='4' textAlign='right'>
            <Text>Yago Passos</Text>
            <Text color='gray.300' fontSize='small'>
                yp.anjos@hotmail.com
            </Text>
        </Box>
        <Avatar size='md' name="Yago Passos"/>
    </Flex>
    )
}