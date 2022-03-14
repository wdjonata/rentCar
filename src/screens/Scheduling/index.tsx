import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

import {
   Container,
   Header,
   Title,
   RentalPeriod,
   DateInfo,
   DateTitle,
   DateValueContainer,
   DateValue,
   Content,
   Footer
} from './styles';
import { Button } from '../../components/Button';
import { Calendar } from 'react-native-calendars';

export const Scheduling = () => {
    const navigation = useNavigation()

    const handleSchedulingDetails = () => {
      navigation.navigate('SchedulingDetails')
    }

    const handleCarDetails = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <BackButton onPress={handleCarDetails}/>
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValueContainer selected={false}>
                            <DateValue></DateValue>
                        </DateValueContainer>
                    </DateInfo>

                    <ArrowSvg/>

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValueContainer selected={true}>
                            <DateValue>10/03/2022</DateValue>
                        </DateValueContainer>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar/>
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handleSchedulingDetails}/>
            </Footer>

        </Container>
    );
}