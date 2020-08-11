import React, { useEffect } from 'react';

import Card from '../../components/Card'


import {
  HeaderStyled, Logo, Image, Form, Input, Button, Result,
  ImageRounded, Line, Title, FlexCards, TitleFooter
} from './styles'


import { IconHearth } from '../../components/Card/styles'
import logoImage from '../../assets/images/Logo.svg'




function Search() {


  return (
    <>
      <HeaderStyled>
        <Logo className="logo">
          <Image src={logoImage} alt="Logo" />
        </Logo>
      </HeaderStyled>
      <Form>
        <Input type='text' placeholder='Digite seu usuário' />
        <Button type='submit'>BUSCAR</Button>
      </Form>

      <Result>
        <ImageRounded
          src={'https://avatars2.githubusercontent.com/u/58826355?s=460&u=8c805f2a4e708a2f3ff9c6095373bcb622f1dda2&v=4'}
          alt='Imagem'
        />
        <Title>Matheus Oliveira Santos</Title>
        <Line />

        <FlexCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </FlexCards>
      </Result>
      <TitleFooter target='_blank' href='https://github.com/Matheus0liveira'>Feito por Matheus Oliveira Santos
       <IconHearth />
      </TitleFooter>
    </>
  );
}

export default Search;