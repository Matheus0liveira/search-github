import styled from 'styled-components';
import { Title } from '../../pages/Search/styles';

import { FlexDiv } from '../../assets/styles/global';

import book from '../../assets/icons/book.svg';
import star from '../../assets/icons/star.svg';
import hearth from '../../assets/icons/hearth.svg';

export const Wrapper = styled.div`
width: 100vw;

`;
export const ALink = styled.a`
  cursor: pointer;
  text-decoration: none;


`;
export const CardStyled = styled.article`
background: #FFFF;
border: 0.1rem solid #CCCC;
width: 80%;
min-height: 100px;
padding: 1.3rem 1rem;
border-radius: 1.2rem;
margin: 3.5rem auto;
transition: all .4s ease-in-out;

&:hover{
  transform: scale(1.05);
}

`;

export const TitleStar = styled(FlexDiv)`
justify-content: space-between;

`;

export const TitleCard = styled(Title)`
font-size: 2.5rem;
justify-content: start;
margin: 0;

`;

export const IconBook = styled(FlexDiv)`

 width:1rem;
 height: 20px;
 margin-right: 0.5rem;
 height:1rem;
 background-image:  url(${book});
 background-repeat: no-repeat;
 background-size: cover;
 border: 0;
 `;
export const IconStar = styled(IconBook)`
 background-image:  url(${star});

 `;
export const IconHearth = styled(IconBook)`
 background-image:  url(${hearth});
 margin-left: 0.5rem;

 `;

export const Star = styled(FlexDiv)`


`;

export const CountStar = styled.span`
color: #707070;
font-weight: normal;

`;

export const Description = styled.p`
width: 23rem;
color: #707070;

`;
export const TotalRepos = styled.p`
width: 90%;
margin:auto;
border: 0;

`;
