import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
//import { RectButtonProps } from 'react-native-gesture-handler';

//import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
//import { Car as ModelCar } from '../../database/model/Car';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage
} from './styles';

interface RentProps {
  price: number;
  period: string;
}
export interface CarDataProps {
  brand: string;
  name: string;
  rent:RentProps
  thumbnail: string;
}

export interface Props extends RectButtonProps{
  data: CarDataProps;
}


export function CarCard({ data, ...rest } : Props){
  //const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{ uri: data.thumbnail }} 
        resizeMode="contain"
      />
    </Container>
  );
}