import React, { useEffect, useState } from 'react';

import Lottie from 'react-lottie';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';

import { FaGithubAlt, FaHeart } from 'react-icons/fa';
import useUsers from '../../util/useUsers';
import { useTheme } from '../../context/theme';
import { GlobalStyle } from '../../assets/styles/global';

import Card from '../../components/Card';
import api from '../../services/api';

import {

  HeaderStyled,
  Logo,
  Form,
  Input,
  Button,
  ImageRounded,
  Line,
  Title,
  FlexCards,
  TitleFooter,
  Wrapper,

} from './styles';

import Github from '../../assets/lottie/github.json';

import light from '../../assets/styles/light';
import dark from '../../assets/styles/dark';

function Search() {
  const { data, setData } = useUsers();
  const [inputValue, setInputValue] = useState('');

  const { theme, setTheme } = useTheme();

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
  }, [data.login, setData]);

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
    if (event.key === 'Enter') handleClickButton();
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

  function toggleSelectTheme() {
    setTheme(theme.title === 'light' ? dark : light);
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
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <HeaderStyled onClick={handleResetResults}>
        <Logo className="logo">
          <FaGithubAlt />
          <h1>GIT-SEARCH</h1>

        </Logo>

      </HeaderStyled>

      <Wrapper>
        {theme.title === 'dark' ? <p>Dark</p> : <p>Light</p>}

        <Switch

          onChange={toggleSelectTheme}
          checked={theme.title === 'dark'}
          onColor="#FFF"
          onHandleColor="#212121"
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={10}
          width={40}
          handleDiameter={20}
        />
      </Wrapper>

      <Form>

        <Input
          type="text"
          placeholder="Type your user"
          onChange={handleChangeInput}
          onKeyPress={handleKeyPress}
        />

        <Button
          type="submit"
          onClick={handleClickButton}
        >
          SEARCH

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
            No user found
          </Title>
        </>

      ) : (

        <main>

          <ImageRounded

            src={data.avatar_url}
            alt={data.name}
          />

          <Title>{data.name}</Title>

          <Line />

          <FlexCards>

            <Card />

          </FlexCards>

        </main>

      )}

      <TitleFooter target="_blank" href="https://github.com/Matheus0liveira">

        <p>
          Created by: Matheus Oliveira Santos
        </p>
        <FaHeart />

      </TitleFooter>
    </ThemeProvider>
  );
}

export default Search;
