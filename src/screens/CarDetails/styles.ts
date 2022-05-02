import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
   flex: 1;

   background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const AnimatedCarImages = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const AnimatedHeader = styled(Animated.View)`
  position: absolute;
  overflow: hidden;
  z-index: 1;
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

export const AnimatedContent = styled(Animated.ScrollView).attrs({
   contentContainerStyle: {
      paddingHorizontal: 24,
      paddingTop: getStatusBarHeight() + 160,
      alignItems: 'center'
   },
   showVerticalScrollIndicator: false
})``;

export const Details = styled.View`
   width: 100%;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

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

   padding: 24px 24px ${getBottomSpace() + 24}px;
`;