import React from 'react';
import { Box } from '@chakra-ui/react';
import {CurrencyConverterTab} from './components/currencyConverterTab';

export const CurrencyConverter = () => {
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
};