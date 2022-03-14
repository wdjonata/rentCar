import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.header};

   padding-top: 66px;
`;

export const Content= styled.View`
    align-items: center;
    justify-content: center;

    padding-bottom: 80px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.shape};

    margin-top: ${RFValue(47)}px;
`;

export const Message = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_detail};

    text-align: center;

    margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;
`;