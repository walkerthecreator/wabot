import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color:red;
margin:10px;
`

const Btn = () => {
    return(
        <Button>Logout</Button>
    )
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Parag = styled.p`
    color: palevioletred;
    text-align:center;`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
const WrapperFn = () => {
    return(
      <Wrapper>
        <Title>
          welcome to Wabot
        </Title>
        <Parag>
            wabot is one and only solution for tech prodcuts.
        </Parag>
      </Wrapper>
    );
}

export default Btn;
export {WrapperFn}