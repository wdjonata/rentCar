import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { format, parseISO } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar'
import { CarDTO } from '../../dtos/CarDTO';

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

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;  
}

interface Params {
    car: CarDTO;
}

export const Scheduling = () => {
    const [lastSelectedDate, setLasSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const navigation = useNavigation()
    const route = useRoute();
    const { car } = route.params as Params;

    const handleSchedulingDetails = () => {
        
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        });
    }

    const handleCarDetails = () => {
        navigation.goBack()
    }

    const handleChangeDate = (date: DayProps) => {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date

        if(start.timestamp > end.timestamp) {
            start = end
            end = start
        }
        setLasSelectedDate(end)
        const interval = generateInterval(start, end)
        setMarkedDates(interval)

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    
        setRentalPeriod({
          startFormatted: format(parseISO(firstDate), 'dd/MM/yyyy'),
          endFormatted: format(parseISO(endDate), 'dd/MM/yyyy'),
        })
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
                        <DateValueContainer selected={!!rentalPeriod.startFormatted}>
                            <DateValue>{rentalPeriod.startFormatted}</DateValue>
                        </DateValueContainer>
                    </DateInfo>

                    <ArrowSvg/>

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValueContainer selected={!!rentalPeriod.endFormatted}>
                            <DateValue>{rentalPeriod.endFormatted}</DateValue>
                        </DateValueContainer>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                    onPress={handleSchedulingDetails}
                    enable={!!rentalPeriod.startFormatted}
                />
            </Footer>

        </Container>
    );
}