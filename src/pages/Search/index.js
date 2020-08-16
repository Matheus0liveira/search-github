import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import Card from '../../components/Card';
import api from '../../services/api';
import { IconHearth } from '../../components/Card/styles';
import logoImage from '../../assets/images/Logo.svg';
import { useUsers } from '../../context/user';

import Github from '../../assets/lottie/github.json';

import {
  HeaderStyled, Logo, Image, Form, Input, Button, Result,
  ImageRounded, Line, Title, FlexCards, TitleFooter,
} from './styles';

function Search() {
  const { data, setData } = useUsers();
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    if (data.login !== '') {
      (async () => {
        const resultsData = await api.get(`${data.login}`);

        const {
          login,
          name,
          avatar_url,
          followers,
          following,
          publicRepository,

        } = resultsData.data;

        const resultsRepositories = await api.get(`${login}/repos`);

        const [...newRepo] = resultsRepositories.data;

        const { ...newData } = {
          login,
          name,
          avatar_url,
          followers,
          following,
          publicRepository,
          repositories: newRepo,

        };
        setData(
          newData,
        );
      })();
    }
  }, [data.login]);

  useEffect(() => {
    if (data.repositories.length === 0) {
      document.title = 'Git-Search';
    } else {
      document.title = `(${data.repositories.length} - ${data.login}) Git-Search`;
    }
  }, [data]);

  function handleChangeInput(event) {
    const { value } = event.target;

    setInputValue(value);
  }

  function handleClickButton() {
    setData({ ...data, login: inputValue });
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter')handleClickButton();
  }
  function handleResetResults() {
    setData({
      login: '',
      name: '',
      avatar_url: '',
      followers: '',
      following: '',
      publicRepository: '',
      repositories: [],
    });
  }

  const loadingSearch = {
    loop: true,
    autoPlay: true,
    animationData: Github,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>

      <HeaderStyled onClick={handleResetResults}>

        <Logo className="logo">

          <Image src={logoImage} alt="Logo" />

        </Logo>

      </HeaderStyled>

      <Form>

        <Input
          type="text"
          placeholder="Digite seu usuário"
          onChange={handleChangeInput}
          onKeyPress={handleKeyPress}
        />

        <Button
          type="submit"
          onClick={handleClickButton}
        >
          BUSCAR

        </Button>

      </Form>

      {data.avatar_url === '' ? (
        <>

          <Lottie

            isClickToPauseDisabled
            options={loadingSearch}
            width={100}

          />
          <Title style={{ marginBottom: '180px' }}>
            No user selected
          </Title>
        </>

      ) : (

        <Result>

          <ImageRounded

            src={data.avatar_url}
            alt={data.name}

          />

          <Title>{data.name}</Title>

          <Line />

          <FlexCards>

            <Card />

          </FlexCards>

        </Result>

      )}

      <TitleFooter target="_blank" href="https://github.com/Matheus0liveira">

        Feito por Matheus Oliveira Santos

        <IconHearth />

      </TitleFooter>
    </>
  );
}

export default Search;
