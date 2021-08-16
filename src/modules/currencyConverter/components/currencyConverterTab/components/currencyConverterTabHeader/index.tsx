import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Icons } from '../../../../../../assests/icons/iconsGenerator';
import { HeaderTab } from '../../../../../../components/headerTab';

export const CurrencyConverterTabHeader = () => {
    const [ chartTabActive, setChartTabActive ] = useState(false)
    const [ convertTabActive, setConvertTabActive ] = useState(false)

    const handleConvertTabActive = () => {
        setChartTabActive(false);
        setConvertTabActive(true);
    }

    const handleChartTabActive = () => {
        setConvertTabActive(false);
        setChartTabActive(true);
    }

    return (
        <Box
            w='100%'
            h='56px'
            display='flex'
        >
            <HeaderTab
                text={'Convert'}
                onClick={() => handleConvertTabActive()}
                activeTab={convertTabActive}
                renderIcon={() => <Icons.MoneyExchanger />}
            />
            <HeaderTab
                text={'Charts'}
                onClick={() => handleChartTabActive()}
                activeTab={chartTabActive}
                renderIcon={() => <Icons.Chart />}
            />
        </Box>
    );
};