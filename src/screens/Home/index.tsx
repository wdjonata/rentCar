import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.svg'

import { CarCard, CarDataProps } from '../../components/CarCard'

import {
   Container,
   Header,
   HeaderContent,
   TotalCars,
   CarList
} from './styles';

export interface DataListProps extends CarDataProps {
    id: number;
}

export const Home = () => {
    const navigation = useNavigation()

    const handleCarDetails = () => {
        navigation.navigate('CarDetails')
    }
    const CarData: DataListProps[] =  [
        {   
            id: 1,
            brand: 'audi',
            name: 'RS 5 Coupé',
            rent: {
                period: 'ao dia',
                price: 150
            },
            thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/5051/model_middle_comprar-tiptronic_23c24c9941.png'
        },
        {   
            id: 2,
            brand: 'audi',
            name: 'RS 5 Coupé',
            rent: {
                period: 'ao dia',
                price: 150
            },
            thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/5051/model_middle_comprar-tiptronic_23c24c9941.png'
        }
    ]
    

    useEffect(() => {
        
    
    }, [])
    

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

           <Header>
               
               <HeaderContent>
                    <Logo/>
                    <TotalCars>Total de 12 carros</TotalCars>
               </HeaderContent>

               
            </Header>

            <CarList
                data={CarData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CarCard data={item} onPress={handleCarDetails}/>}
            />

        </Container>
    );
}