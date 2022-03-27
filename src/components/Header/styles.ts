import styled from 'styled-components'

export const Container = styled.header`

background-color: #0093E9;
background-image: -webkit-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
background-image: -moz-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
background-image: -o-linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    

    padding:2rem 3rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size:1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: .6rem;
        border-radius: 0.25rem;
        height: 3;
        transition: filter .5s;

        &:hover {
            filter: brightness(0.9) ;
        }
    }

`