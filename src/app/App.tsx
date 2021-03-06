import React, {
    FC,
} from 'react';
import { Box } from '@chakra-ui/react';
import {CurrencyConverterTab} from '../modules/currencyConverter/components/currencyConverterTab';

const App: FC = () => {

    return (
        <Box
            w="100%"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CurrencyConverterTab />
        </Box>
    );
}
export default (App);