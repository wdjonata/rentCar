import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import {
   Container,
   Header,
   Title,
   SubTitle,
   Content,
   Appointments,
   AppointmentsTitle,
   AppointmentsQuantity,
   CarWrapper,
   CarFooter,
   CarFooterTitle,
   CarFooterPeriod,
   CarFooterDate

} from './styles';

interface CarProps {
   id: number;
   user_id: number;
   car: CarDTO;
   startDate: string;
   endDate: string;
}

export const MyCars = () => {
   const [cars, setCars] = useState<CarProps[]>([])
   const [loading, setLoading] = useState(true);

   const navigation = useNavigation()

   const theme = useTheme()

   useEffect(() => {
      const fetchCars = async() => {
         try {
            const response = await api.get('schedules_byuser?user_id=1')
            setCars(response.data)
         } catch (error) {
            console.log(error)
         }finally{
            setLoading(false)
         }
      }

      fetchCars()
   }, [])

   function handleBack(){
      navigation.goBack();    
   }

   return (
      <Container>
         <Header>
            <StatusBar
               barStyle="light-content"
               backgroundColor="transparent"
               translucent
            />

            <BackButton
               onPress={handleBack}
            />

            <Title>
               Escolha uma{'\n'}
               data de início e{'\n'}
               fim do aluguel
            </Title>

            <SubTitle>
               Conforto, segurança e praticidade.
            </SubTitle>
         </Header>

         { loading 
            ? 
            <Load/> 
            :
            <Content>

               <Appointments>
                  <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                  <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
               </Appointments>
               <FlatList
                  data={cars}
                  keyExtractor={item => String(item.id)}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                     <CarWrapper>
                        <CarCard data={item.car} />

                        <CarFooter>
                           <CarFooterTitle>PERÍODO</CarFooterTitle>
                           <CarFooterPeriod>
                              <CarFooterDate>{item.startDate}</CarFooterDate>
                              <AntDesign
                                 name="arrowright"
                                 size={20}
                                 color={theme.colors.title}
                                 style={{ marginHorizontal: 10 }}
                              />
                              <CarFooterDate>{item.endDate}</CarFooterDate>
                           </CarFooterPeriod>
                        </CarFooter>
                     </CarWrapper>
                  
                  )}
               />
            </Content>
         }
      </Container>
   );
}