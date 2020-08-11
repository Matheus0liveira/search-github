import styled from 'styled-components'
import { Title } from '../../pages/Search/styles'

import { FlexDiv } from '../../assets/styles/global'


import book from '../../assets/icons/book.svg'
import star from '../../assets/icons/star.svg'
import hearth from '../../assets/icons/hearth.svg'


export const CardStyled = styled.article`
background: #FFFF;
border: 0.1rem solid #CCCC;
padding: 1.3rem 1rem;
border-radius: 1.2rem; 
margin: 3.5rem auto;

@media (min-width: 870px){
  margin: 3.5rem 1rem;
}

`

export const TitleStar = styled(FlexDiv)` 
justify-content: space-between;

`

export const TitleCard = styled(Title)`
font-size: 2.5rem;
justify-content: start;
margin: 0;

`

export const IconBook = styled(FlexDiv)`

 width:1rem;
 height: 20px;
 margin-right: 0.5rem;
 height:1rem;
 background-image:  url(${book});
 background-repeat: no-repeat;
 background-size: cover;
 border: 0;
 `
export const IconStar = styled(IconBook)`
 background-image:  url(${star});

 `
export const IconHearth = styled(IconBook)`
 background-image:  url(${hearth});
 margin-left: 0.5rem;

 `

export const Star = styled(FlexDiv)`


`

export const CountStar = styled.span`
color: #707070;
font-weight: normal;

`


export const Description = styled.p`
width: 23rem;
color: #707070;
`


