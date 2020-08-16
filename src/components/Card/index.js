import React from 'react';

import { useUsers } from '../../context/user';

import {
  CardStyled,
  TitleCard,
  Star,
  IconBook,
  IconStar,
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
        Total de reposit:
        {' '}
        {' '}
        {repositories.length}
      </TotalRepos>
      {repositories.map((repo) => (

        <ALink target="_blank" href={repo.html_url}>
          <CardStyled key={repo.id}>
            <TitleStar>
              <TitleCard>
                <IconBook />
                {repo.name}
              </TitleCard>
              <Star>
                <IconStar />
                <CountStar>{repo.stargazers_count}</CountStar>
              </Star>

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
