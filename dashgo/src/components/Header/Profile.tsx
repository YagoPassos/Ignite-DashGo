import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfiileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfiileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Yago Passos</Text>
                    <Text color='gray.300' fontSize='small'>
                        yp.anjos@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size='md' name="Yago Passos" />
        </Flex>
    )
}