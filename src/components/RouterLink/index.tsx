import React from 'react'; 

import { Text, ResponsiveValue, ThemeTypings } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as CSS from 'csstype';

declare type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings ? ResponsiveValue<CSSType | ThemeTypings[ThemeKey]> : ResponsiveValue<CSSType>;

interface RouterLinkProps{
    to: string,
    children?: React.ReactNode,
    color?: Token<CSS.Property.Color, "colors">;
}

export default function RouterLink({to, children, color = 'green'}: RouterLinkProps) {
  return (
   <Link to={to}>
        <Text color={color} as="span">
            {children}
        </Text>
   </Link>
  );
}