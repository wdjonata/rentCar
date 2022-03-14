import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: 104px;
   height: 92px;

   background-color: ${({ theme }) => theme.colors.background_primary };

   justify-content: center;
   align-items: center;

   margin-bottom: 8px;
`;

export const Name = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
`;