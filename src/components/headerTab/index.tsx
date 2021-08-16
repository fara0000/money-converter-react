import React, { FC } from 'react';
import {Box, Link, Text} from '@chakra-ui/react';

export interface HeaderTabProps {
    text: string;
    onClick: () => void;
    activeTab: boolean;
    renderIcon: () => object;
}

export const HeaderTab: FC<HeaderTabProps> = (props) => {
    const {
        text,
        onClick,
        activeTab,
        renderIcon,
    } = props;

    return (
        <Link
            w='100%'
            h='100%'
            color='rgb(55, 80, 110)'
            bgColor='rgb(240, 245, 250)'
            display='flex'
            alignItems='center'
            justifyContent='center'
            style={activeTab ? { color: 'rgb(0, 111, 232)', backgroundColor: 'rgb(255, 255, 255)', fontWeight: 'bold' } : {}}
            _hover={{ cursor: 'pointer', opacity: 0.5 }}
            onClick={onClick}
        >
            {
                renderIcon()
            }
            <Text ml='8px'>
                { text }
            </Text>
        </Link>
    );
};