import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
   width: 100%;

   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   margin-top: ${getStatusBarHeight() + 18}px;
   margin-left: 24px;

   position: absolute;

`;

export const CarImages = styled.View`
   margin-top: ${getStatusBarHeight() + 33}px;
`;

export const Content = styled.ScrollView.attrs({
   contentContainerStyle: {
      padding: 24,
      alignItems: 'center'
   },
   showVerticalScrollIndicator: false
})``;

export const Details = styled.View`
   width: 100%;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   margin-top: 38px;
`;

export const Description = styled.View`

`;

export const Brand = styled.Text`
   font-size: 10px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.text_detail};

   text-transform: uppercase;
`;

export const Name = styled.Text`
   font-size: 25px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.title};

`;

export const Rent = styled.View`

`;

export const Period = styled.Text`
   font-size: ${RFValue(10)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.text_detail};

   text-transform: uppercase;
`;

export const Price = styled.Text`
   font-size: ${RFValue(25)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.main};
`;

export const About = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.text};
   text-align: justify;

   margin-top: ${RFValue(23)}px;

   line-height: ${RFValue(25)}px;
`;

export const RentalPeriod = styled.View`
   width: 100%;

   flex-direction: row;

   justify-content: space-between;
   align-items: center;

   margin-top: 40px;

   border-bottom-width: 1px;
   border-bottom-color: ${({ theme }) => theme.colors.line};

   padding-bottom: 16px;

`;

export const CalendarIcon = styled.View`
   width: ${RFValue(48)}px;
   height: ${RFValue(48)}px;

   align-items: center;
   justify-content: center;

   background-color: ${({ theme }) => theme.colors.main};
`;

export const DateInfo = styled.View`
   height: ${RFValue(48)}px;
   justify-content: space-around;
`;

export const DateTitle = styled.Text`
   font-size: ${RFValue(10)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.text_detail};

   text-transform: uppercase;
`;

export const DateValue = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.title};
`;

export const RentalPrice = styled.View`
   width: 100%;

   margin-top: 16px;
`;

export const RentalLabel = styled.Text`
   font-size: ${RFValue(10)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.text_detail};

   text-transform: uppercase;
`;

export const RentalPriceDetail = styled.View`
   width: 100%;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

`;

export const RentalPriceQuota = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
   font-size: ${RFValue(24)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.success};
`;


export const Accessories = styled.View`
   width: 100%;

   flex-direction: row;
   flex-wrap: wrap;

   align-items: center;
   justify-content: space-between;
   margin-top: 16px;
`;

export const Footer = styled.View`
   width: 100%;
   height: 111px;

   background-color: ${({ theme }) => theme.colors.background_primary};

   padding: 24px;
`;