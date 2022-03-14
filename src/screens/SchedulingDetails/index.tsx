import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useTheme } from 'styled-components';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExChangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   Acessories,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   DateTitle,
   DateValue,
   RentalPrice,
   RentalLabel,
   RentalPriceDetail,
   RentalPriceQuota,
   RentalPriceTotal,
   Footer
} from './styles';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';

export const SchedulingDetails = () => {
   const theme = useTheme();

   const navigation = useNavigation()

   const handleSchedulingComplete = () => {
      navigation.navigate('SchedulingComplete')
   }

   const handleScheduling = () => {
      navigation.goBack()
   }
   return (
      <Container>
         <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
         />
         <Header>
            <BackButton
               onPress={handleScheduling}
            />
         </Header>

         <CarImages>
            <ImageSlider
               imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/5051/model_middle_comprar-tiptronic_23c24c9941.png']}
            />
         </CarImages>

         <Content>
            <Details>
               <Description>
                  <Brand>Lamborghini</Brand>
                  <Name>Huracan</Name>
               </Description>
               <Rent>
                  <Period>Ao Dia</Period>
                  <Price>R$ 580</Price>
               </Rent>
            </Details>
            <Acessories>
               <Acessory name="380Km/h" icon={SpeedSvg}/>
               <Acessory name="3.2s" icon={AccelerationSvg}/>
               <Acessory name="800 hp" icon={ForceSvg}/>
               <Acessory name="Gasolina" icon={GasolineSvg}/>
               <Acessory name="Auto" icon={ExChangeSvg}/>
               <Acessory name="2 pessoas" icon={PeopleSvg}/>
            </Acessories>

            <RentalPeriod>
               <CalendarIcon>
                  <Feather
                     name='calendar'
                     size={RFValue(24)}
                     color={theme.colors.shape}
                  />
               </CalendarIcon>
               <DateInfo>
                   <DateTitle>De</DateTitle>
                   <DateValue>05/03/2022</DateValue>
               </DateInfo>
               
               <Feather
                  name='chevron-right'
                  size={RFValue(15)}
                  color={theme.colors.shape}
               />

               <DateInfo>
                   <DateTitle>Até</DateTitle>
                   <DateValue>10/03/2022</DateValue>
               </DateInfo>
            </RentalPeriod>

            <RentalPrice>
               <RentalLabel>TOTAL</RentalLabel>
               <RentalPriceDetail>
                  <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                  <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
               </RentalPriceDetail>
            </RentalPrice>
            
         </Content>

         <Footer>
            <Button 
               title='Alugar agora' 
               color={theme.colors.success}
               onPress={handleSchedulingComplete}   
            />
         </Footer>
         
      </Container>
   );
}