import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Text, View, Image } from 'react-native';

import Logo from '../../assets/home.svg';


import { LoadAnimation } from '../../components/LoadAnimation';

import {
  Container,
  Header,
  HeaderContent,
} from './styles';

export function Home() {

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
      <Image
        source={require('../../assets/people.svg')}
        height={100}
        width={100}
      />
        </HeaderContent>
      </Header>

       <LoadAnimation /> 
        
    </Container>
  );
}
