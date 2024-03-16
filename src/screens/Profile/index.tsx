import { Feather } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';

import React, { useEffect, useState } from 'react';
import {
  Alert, Keyboard, KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
  Container, Content, Header, HeaderTitle, HeaderTop, LogoutButton, Option, Options, OptionTitle, Photo,
  PhotoButton, PhotoContainer, Section
} from './styles';

export function Profile() {


  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState();


  const netInfo = useNetInfo();


  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }



  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton
                color={theme.colors.shape}
                onPress={handleBack}
              />
             
            </HeaderTop>

            <PhotoContainer>
              {!!avatar && <Photo source={{ uri: avatar }} />}

              <PhotoButton onPress={()=>{}}>
                <Feather
                  name="camera"
                  size={24}
                  color={theme.colors.shape}
                />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            
          
            
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}