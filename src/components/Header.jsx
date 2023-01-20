import styled from 'styled-components'
import { useState } from 'react';

export default function Header({fetchData}) {

const [adress, setAdress ] = useState('')

    function handleChange(e) {
        setAdress(e.target.value)
      }
      function handleSubmit() {
        fetchData(adress);
        console.log(adress)
      }

    return (
        <StyledHeader>
            <img src="/pattern-bg.png" alt="" />
            <h1>IP Adress Tracker</h1>
            <Flex>
                <input  onChange={handleChange} type="text" placeholder='Search for any IP adress or domain'/>
                <input  onClick={handleSubmit} type="button" value='>' />
            </Flex>
        </StyledHeader>
    )
}

const Flex = styled.div`
    display: flex;
justify-content: center;
margin: 0 auto;

input, button {
    flex: 1;
}
@media (min-width: 700px) {
    & input[type="text"] {
        flex:0;
        min-width:500px;
    }
}

`

const StyledHeader = styled.div`
    h1 {
        font-weight: 500;
        color: white;
    }
    form {
        border: red;
        border-radius: 50%;
    }

    input[type="text"] {
        border: none;
        border-radius: 10px 0 0 10px;
        padding: 15px;
        font-size: 16px;
        height: 60px;
        margin-left: 5vw;
        z-index: 2;
    }

    input[type="button"] {
        border: none;
        border-radius: 0 10px 10px 0;
        font-size: 30px;
        color: white;
        background-color: hsl(0, 0%, 17%);
        min-width: 60px;
        height: 60px;
        flex-grow: 0;
        margin-right: 5vw;
        z-index: 2;
    }

    img {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 350px;
        z-index: -1;
        max-width: 100%;
        object-fit: cover;
    }
`