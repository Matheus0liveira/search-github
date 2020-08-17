import styled from 'styled-components';

import { FlexDiv } from '../../assets/styles/global';

export const HeaderStyled = styled.header`
margin: 60px 0 0 0;
cursor: pointer;
transition: opacity 0.2s ease-in;
&:hover{
  opacity: 0.5;

}

`;

export const Logo = styled(FlexDiv)`
margin-top: 2rem;

svg{
  font-size: 10rem;
  color: ${(props) => props.theme.colors.primary};
  transition: color .3s;
}
h1{
  font-size: 7rem;
  font-weight: normal;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 2rem;
  transition: color .5s;
}
@media (max-width: 740px){
  svg{
  font-size: 7rem;
}
  h1{
  font-size: 3.6rem;
}
}

`;

export const Image = styled.img`
width: 45%;
min-width: 15rem;

`;

export const Form = styled(FlexDiv)`
  flex-direction: column;
  margin: 8.3rem 0 2rem;

  @media (min-width: 700px){
    flex-direction: row;

    margin: 8.3rem  25rem;
  }

`;

export const Input = styled.input`
width: 90%;
min-width: 14rem;
text-align: center;
padding:  0.5rem 1rem;
color: #212121;
border-radius: 0;

border: 0.1rem solid ${(props) => props.theme.colors.secondary};


  @media (min-width: 700px){
    width: 100%;
    text-align: initial;
      padding: 0.9rem 1rem;

  }

`;

export const Button = styled.button`
width: 90%;
min-width: 14rem;


padding:  1rem 1rem;
color: ${(props) => props.theme.colors.primary};
background:${(props) => props.theme.colors.backgroundButton};
border: 1px solid ${(props) => props.theme.colors.border};
border: none;
border-radius: 0;

cursor: pointer;
transition: all 0.2s;
&:hover{
  opacity:0.8;

}
@media (min-width: 700px){
  width: 40%;
   padding: 1rem 1rem;
}

`;

export const Result = styled.main`

`;

export const ImageRounded = styled.img`
display: flex;
align-items: center;
justify-content: center;
width: 14rem;
height: 14rem;
border-radius: 50%;
border: 0.2rem solid ${(props) => props.theme.colors.border};
margin: 4rem auto 0 ;

`;

export const Line = styled.hr`
width: 90%;
margin: 2.6rem auto;
border: 0;
background:${(props) => props.theme.colors.secondary};
height: 1px;

`;

export const Title = styled(FlexDiv)`

font-size: 3rem;
margin-top: 2.1rem;
color: ${(props) => props.theme.colors.primary};

`;

export const FlexCards = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;


@media (min-width: 700px){
  flex-wrap: no-wrap;
}

`;

export const TitleFooter = styled.a`
display: flex;
align-items: center;
justify-content: center;
margin-left: 1rem;
color:${(props) => props.theme.colors.primary};
text-decoration: none;
transition: color .2s ;

&:hover{

  color: ${(props) => props.theme.colors.secondary};
}

`;
export const Wrapper = styled(FlexDiv)`
flex-direction: column;

P{
  margin: 1rem 0;
 color: ${(props) => props.theme.colors.secondary};
}

`;
