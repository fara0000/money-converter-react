import React from 'react';
import { Box } from '@chakra-ui/react';
import { CurrencyConverterTabHeader } from './components/currencyConverterTabHeader';
import {CurrencyConverterTabBody} from './components/currencyConverterTabBody';

export const CurrencyConverterTab = () => {
    return (
        <Box
            w='1152px'
            h='306px'
            display='flex'
            boxShadow='rgb(35 55 80 / 30%) 0px 6px 12px'
            borderRadius='8px'
            flexDirection='column'
            backgroundColor='rgb(255, 255, 255)'
        >
            <CurrencyConverterTabHeader />
            <CurrencyConverterTabBody />
        </Box>
    );
};