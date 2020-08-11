import React from 'react';

import {
  CardStyled,
  TitleCard,
  Star,
  IconBook,
  IconStar,
  CountStar,
  TitleStar,
  Description
} from './styles'

function Card() {
  return (
    <CardStyled>
      <TitleStar>
        <TitleCard>
          <IconBook />
              Title
        </TitleCard>
        <Star>
          <IconStar />
          <CountStar>10</CountStar>
        </Star>

      </TitleStar>
      <Description>
        Projeto realizado pelo Matheus Oliveira Santos o brabo, brafcefef f ef ef ef f  e ee ef efe f e fe
      </Description>
    </CardStyled>
  )
}

export default Card;