import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
   About,
   Acessories,
   Footer
} from './styles';
import { Button } from '../../components/Button';

export const CarDetails = () => {
   const navigation = useNavigation()

   const handleScheduling = () => {
      navigation.navigate('Scheduling')
   }

   const handleHome = () => {
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
               onPress={handleHome}
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

            <About>
               Este é automóvel desportivo. Surgiu do
               lendário touro de lide indultado na praça Real Maestranza de Sevilla.
               É um belíssimo carro para quem gosta de acelerar.
            </About>
            
         </Content>

         <Footer>
            <Button title='Escolher período do aluguel' onPress={handleScheduling}/>
         </Footer>
         
      </Container>
   );
}