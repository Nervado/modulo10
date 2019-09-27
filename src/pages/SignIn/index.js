import React from 'react';

import {Image} from 'react-native';
import Button from '~/pages/Button';
import Input from '~/pages/Input';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText} from './styles'

import logo from '~/assets/logo.png'

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
           <FormInput
             icon="lock-outline"
             secureTextentry
            placeholder="Digite seu e-mail"
           />
           <SubmitButton onPress={()=> {}}> Acessar </SubmitButton>

             <SignLink onPress={()=>{}}>
                <SignLinkText>Criar conta gratuita</SignLinkText>
             </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
