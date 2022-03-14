import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueContainerProps {
    selected: boolean;
}

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;

    background-color: ${({ theme }) => theme.colors.header};

    padding: ${getStatusBarHeight() + 18}px 24px 24px;

    justify-content: center;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};

    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateInfo = styled.View`
    width: 30%;

    justify-content: space-between;
`;

export const DateTitle = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text};

    text-transform: uppercase;
`;

export const DateValueContainer = styled.View<DateValueContainerProps>`  
  ${({ selected, theme }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
  `}
`;

export const DateValue = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24,
     },
     showVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    padding: 24px;
`;