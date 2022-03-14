import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
   Container,
   Content,
   Title,
   Message,
   Footer
} from './styles';

export const SchedulingComplete = () => {
    const { width } = useWindowDimensions()
    const theme = useTheme()

    const navigation = useNavigation()

    const handleHome = () => {
        navigation.navigate('Home')
    }

    return (
       <Container>
           <LogoSvg width={width}/>

            <Content>
                <DoneSvg width={80} height={80}/>

                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel. 
                </Message>

            </Content>

           <Footer>
                <Button 
                    color={theme.colors.shape_dark}
                    title='OK'
                    width={80}
                    onPress={handleHome}
                />
           </Footer>

        </Container>
    );
}