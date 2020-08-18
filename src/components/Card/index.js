import React from 'react';

import { FaBook, FaStar } from 'react-icons/fa';
import useUsers from '../../util/useUsers';

import {
  CardStyled,
  TitleCard,
  CountStar,
  TitleStar,
  TotalRepos,
  Description,
  ALink,
  Wrapper,
} from './styles';

function Card() {
  const { data } = useUsers();
  const { repositories } = data;
  return (
    <Wrapper>
      <TotalRepos>
        Total de repositórios:
        {' '}
        {' '}
        {repositories.length}
      </TotalRepos>
      {repositories.map((repo) => (

        <ALink target="_blank" href={repo.html_url} key={repo.id}>
          <CardStyled>
            <TitleStar>
              <TitleCard>
                <FaBook />
                {repo.name}
              </TitleCard>
              <div>
                <FaStar />
                <CountStar>{repo.stargazers_count}</CountStar>
              </div>

            </TitleStar>
            <Description>
              {repo.description}
            </Description>

          </CardStyled>
        </ALink>

      ))}

    </Wrapper>
  );
}

export default Card;
