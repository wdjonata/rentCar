import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcons'

import { CarDTO } from '../../dtos/CarDTO';

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
   Accessories,
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
import { format } from 'date-fns/esm';
import { api } from '../../services/api';

interface Params {
   car: CarDTO;
   dates: string[];
}

interface RentalPeriod {
   start: string;
   end: string;
}

export const SchedulingDetails = () => {
   const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
   const [loading, setLoading] = useState(false)

   const theme = useTheme();

   const navigation = useNavigation()
   const route = useRoute();
   const { car, dates } = route.params as Params;

   const rentTotal = Number(dates.length * car.rent.price);

   const handleConfirmRental = async() => {
      setLoading(true)
      const response = await api.get(`/schedules_bycars/${car.id}`);

      const unavailable_dates = [
         ...response.data.unavailable_dates,
         ...dates
      ]

      api.post("schedules_byuser", {
         user_id: 1,
         car,
         startDate: format(new Date(dates[0]), 'dd/MM/yyyy'),
         endDate: format(new Date(dates[dates.length - 1]), 'dd/MM/yyyy')
      })

      api.put(`/schedules_bycars/${car.id}`, {
         id: car.id,
         unavailable_dates
      })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => {
         setLoading(false)
         Alert.alert('Não foi possível confirmar o agendamento.')
      })
   }

   const handleScheduling = () => {
      navigation.goBack()
   }

   useEffect(() => {
      setRentalPeriod({
         start: format(new Date(dates[0]), 'dd/MM/yyyy'),
         end: format(new Date(dates[dates.length - 1]), 'dd/MM/yyyy')
      })
   }, [])
   
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
               imagesUrl={car.photos}
            />
         </CarImages>

         <Content>
            <Details>
               <Description>
                  <Brand>{car.brand}</Brand>
                  <Name>{car.name}</Name>
               </Description>
               <Rent>
                  <Period>{car.rent.period}</Period>
                  <Price>R$ {car.rent.price}</Price>
               </Rent>
            </Details>
            <Accessories>

               {
                  car.accessories.map(accessory => 
                     <Accessory
                        key={accessory.type}
                        name={accessory.name} 
                        icon={getAccessoryIcon(accessory.type)}
                     />
                  )
               }
               
               
            </Accessories>

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
                   <DateValue>{rentalPeriod.start}</DateValue>
               </DateInfo>
               
               <Feather
                  name='chevron-right'
                  size={RFValue(15)}
                  color={theme.colors.shape}
               />

               <DateInfo>
                   <DateTitle>Até</DateTitle>
                   <DateValue>{rentalPeriod.end}</DateValue>
               </DateInfo>
            </RentalPeriod>

            <RentalPrice>
               <RentalLabel>TOTAL</RentalLabel>
               <RentalPriceDetail>
                  <RentalPriceQuota>R$ {car.rent.price} x{dates.length} diárias</RentalPriceQuota>
                  <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
               </RentalPriceDetail>
            </RentalPrice>
            
         </Content>

         <Footer>
            <Button 
               title='Alugar agora' 
               color={theme.colors.success}
               onPress={handleConfirmRental}
               loading={loading}
               enable={!loading}
            />
         </Footer>
         
      </Container>
   );
}