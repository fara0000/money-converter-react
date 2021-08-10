import React, {
    FC,
} from 'react';
import { Box, Text } from '@chakra-ui/react';

const App: FC = () => {

    return (
        <Box
            w='100%'
            h='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Text>
                Hello, Shit!
            </Text>
        </Box>
    );
}
export default (App);