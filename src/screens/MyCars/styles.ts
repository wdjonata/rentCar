import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
   width: 100%;
   height: 325px;

   background-color: ${({ theme }) => theme.colors.header};

   justify-content: center;
   padding: 25px;
   padding-top: ${getStatusBarHeight() + 18}px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(30)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_500};
   color: ${({ theme }) => theme.colors.shape};

   margin-top: 24px;
`;

export const SubTitle = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_400};
   color: ${({ theme }) => theme.colors.shape};

   margin-top: 24px;
`;

export const Content = styled.View`
   flex: 1;
   width: 100%;
   padding: 0 16px;
`;

export const Appointments = styled.View`
   align-items: center;
   justify-content: space-between;
   flex-direction: row;

   padding: 16px 0;
`;

export const AppointmentsTitle = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_500};
   color: ${({ theme }) => theme.colors.title};
`;

export const CarWrapper = styled.View`
   margin-bottom: 16px;
`;

export const CarFooter = styled.View`
   width: 100%;

   background-color: ${({ theme }) => theme.colors.background_secondary};

   align-items: center;
   flex-direction: row;
   justify-content: space-between;

   padding: 25px;

   margin-top: -12px;
`;

export const CarFooterTitle = styled.Text`
   font-size: ${RFValue(10)}px;
   font-family: ${({ theme }) => theme.fonts.secondary_500};
   color: ${({ theme }) => theme.colors.text_detail};
`;

export const CarFooterPeriod = styled.View`
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
`;

export const CarFooterDate = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.primary_400};
   color: ${({ theme }) => theme.colors.title};
`;
