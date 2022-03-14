import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
   color?: string;
   width?: number;
}

export const Container = styled(RectButton)<ButtonProps>`
   width: ${({ width }) => width ? `${RFValue(width)}px` : '100%'};
   height: 56px;

   align-items: center;
   justify-content: center;

   background-color: ${({ color, theme }) => color ? color : theme.colors.main};
`;

export const Title = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_500};
   color: ${({ theme }) => theme.colors.background_secondary};
`;