import styled from 'styled-components';
import { Title } from '../../pages/Search/styles';

import { FlexDiv } from '../../assets/styles/global';

// import book from '../../assets/icons/book.svg';
// import star from '../../assets/icons/star.svg';
// import hearth from '../../assets/icons/hearth.svg';

export const Wrapper = styled.div`
width: 100vw;
`;

export const ALink = styled.a`
  cursor: pointer;
  text-decoration: none;


`;
export const CardStyled = styled.article`
  background:${(props) => props.theme.colors.backgroundSecondary};
  border: 0.1rem solid ${(props) => props.theme.colors.border};
  width: 80%;
  min-height: 100px;
  padding: 1.3rem 1rem;
  border-radius: 0.4rem;
  margin: 3.5rem auto;
  transition: all .2s ease-in-out;

&:hover{
  transform: scale(1.05);
}

`;

export const TitleStar = styled(FlexDiv)`
  justify-content: space-between;
  svg{

    width: 1.5rem;
    color: ${(props) => props.theme.colors.secondary};
    margin:0  0.5rem;
    transition: color 2s;

  }

`;

export const TitleCard = styled(Title)`

  font-size: 2.5rem;
  justify-content: start;
  margin: 0;


  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }



`;

// export const IconHearth = styled(IconBook)`
//   background-image:  url(${hearth});
//   margin-left: 0.5rem;

//  `;

export const CountStar = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: normal;

`;

export const Description = styled.p`
  width: 23rem;
  color:${(props) => props.theme.colors.secondary};

`;
export const TotalRepos = styled.p`
  width: 90%;
  margin:auto;
  border: 0;

`;
