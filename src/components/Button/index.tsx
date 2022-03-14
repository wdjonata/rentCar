import React from 'react';

import {
   Container,
   Title
} from './styles';

interface Props {
   title: string;
   color?: string;
   width?: number;
   onPress: () => void
}

export const Button = ({ title, color, width, onPress }: Props) => {
   return (
      <Container 
         color={color}
         width={width}
         onPress={onPress}
      >
         <Title>{title}</Title>
      </Container>
   );
}