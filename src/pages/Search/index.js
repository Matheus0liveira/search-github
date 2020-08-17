import React, { useEffect, useState } from 'react';

import Lottie from 'react-lottie';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';

import { FaGithubAlt } from 'react-icons/fa';
import { useUsers } from '../../context/user';
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
  Result,
  ImageRounded,
  Line,
  Title,
  FlexCards,
  TitleFooter,
  Wrapper,

} from './styles';

import { IconHearth } from '../../components/Card/styles';
import Github from '../../assets/lottie/github.json';

import light from '../../assets/styles/light';
import dark from '../../assets/styles/dark';

function Search() {
  const { data, setData } = useUsers();
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState(false);

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
  }, [data.login]);

  useEffect(() => {
    if (data.repositories.length === 0) {
      document.title = 'Git-Search';
    } else {
      document.title = `(${data.repositories.length} - ${data.login}) Git-Search`;
    }
  }, [data]);

  // // useEffect(() => {
  // //   localStorage.setItem('theme', JSON.stringify(theme));

  // //   const selectTheme = JSON.parse(localStorage.getItem('theme'));
  // //   console.log(selectTheme);

  // //   // setTheme(selectTheme);
  // // }, [theme]);

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
    setSelected(!selected);
    theme === light ? setTheme(dark) : setTheme(light);
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
        {theme === dark ? <p>Dark</p> : <p>Light</p>}

        <Switch

          onChange={toggleSelectTheme}
          checked={selected}

          onChange={toggleSelectTheme}
          checked={selected}
          onColor="#FFF "
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
            No user found
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

        <p>
          Feito por Matheus Oliveira Santos
        </p>
        <IconHearth />

      </TitleFooter>
    </ThemeProvider>
  );
}

export default Search;
