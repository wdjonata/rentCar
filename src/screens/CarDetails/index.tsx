import React from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcons'

import {
   Container,
   AnimatedHeader,
   Header,
   AnimatedCarImages,
   AnimatedContent,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   About,
   Accessories,
   Footer
} from './styles';

interface Params {
   car: CarDTO
}

export const CarDetails = () => {
   const navigation = useNavigation()
   const route = useRoute();
   const { car } = route.params as Params;
   const statusBarHeight = getStatusBarHeight();

   const scrollY = useSharedValue(0);
   const scrollHandler = useAnimatedScrollHandler(event => {
      scrollY.value = event.contentOffset.y;
   });

   const headerStyleAnimation = useAnimatedStyle(() => {
      return {
         height: interpolate(
            scrollY.value,
            [0, 200],
            [200, statusBarHeight + 50],
            Extrapolate.CLAMP
         )
      }
   })

   const sliderCarsStyleAnimation = useAnimatedStyle(() => {
      return {
         opacity: interpolate(
            scrollY.value,
            [0, 150],
            [1, 0],
            Extrapolate.CLAMP
         )
      }
   })

   const handleScheduling = () => {
      navigation.navigate('Scheduling', { car })
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
         <AnimatedHeader style={headerStyleAnimation}>
            <Header>
               <BackButton
                  onPress={handleHome}
               />
            </Header>
            <AnimatedCarImages style={sliderCarsStyleAnimation}>
               <ImageSlider
                  imagesUrl={car.photos}
               />
            </AnimatedCarImages>
         </AnimatedHeader>

         <AnimatedContent 
            onScroll={scrollHandler}
            scrollEventThrottle={16}
         >
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
                  car.accessories.map(accessory => (
                     <Accessory
                        key={accessory.type}
                        name={accessory.name}
                        icon={getAccessoryIcon(accessory.type)}
                     />
                  ))
               }
            </Accessories>

            <About>{car.about}</About>
            <About>{car.about}</About>
            <About>{car.about}</About>
            
         </AnimatedContent>

         <Footer>
            <Button title='Escolher período do aluguel' onPress={handleScheduling}/>
         </Footer>
         
      </Container>
   );
}