import React from 'react';
import { IconType } from 'react-icons/lib';
import { AiOutlineRise } from 'react-icons/ai';
import { Icon, IconProps } from '@chakra-ui/react';
import { RiExchangeDollarLine } from 'react-icons/ri';

const IconsWrapper = (icon: IconType, defaultProps: IconProps = {}) =>
    (props: IconProps) => <Icon as={icon} {...defaultProps} {...props} />

export const Icons = {
    Chart: IconsWrapper(AiOutlineRise, { boxSize: '22px', color: 'rgb(55, 80, 110)' }),
    MoneyExchanger: IconsWrapper(RiExchangeDollarLine, { boxSize: '22px', color: 'rgb(55, 80, 110)' })
}