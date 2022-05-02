import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';



import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api'

import Logo from '../../assets/logo.svg'
import { CarCard } from '../../components/CarCard'
import { Load } from '../../components/Load';

import {
   Container,
   Header,
   HeaderContent,
   TotalCars,
   CarList,
   MyCarsButton
} from './styles';

export const Home = () => {
    const navigation = useNavigation()
    const [ cars, setCars] = useState<CarDTO[]>([])
    const [ loading, setLoading] = useState(true)

    const theme = useTheme()

    const handleCarDetails = (car: CarDTO) => {
        navigation.navigate('CarDetails', {car})
    }

    const handleOpenMyCars = () => {
        navigation.navigate('MyCars')
    }

    useEffect(() => {
        const fetchCars = async() => {
            try {
                const response = await api.get('/cars')
                setCars(response.data)
            } catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        
        fetchCars();
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

            { loading ? <Load/> :
                <CarList
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CarCard data={item} onPress={() => handleCarDetails(item)}/>}
                />
            }

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons
                    name='ios-car-sport'
                    size={32}
                    color={theme.colors.shape}
                />
            </MyCarsButton>

        </Container>
    );
}