import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize='3xl'
            fontWeight='bold'
            letterSpacing='tight'
            w='64'>
            dashgo
            <Text as='span' ml='1' color='pink'>.</Text>
        </Text>
    )
}