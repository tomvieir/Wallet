import styled from 'styled-components'
import { darken } from 'polished'


export const Container = styled.form`
    
    h2 { 
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 3.5rem;
        padding: 0 1.5rem;

        outline: none;
        
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
 
    }

    button[type="submit"] {
        width: 100%;
        height: 3.5rem;
        margin-top: 1rem; 

        outline: none;
        border: none;
        border-radius: 0.25rem;

        background: var(--green);    
        color: #FFF;
        font-size: 1rem;
        font-weight: 600;

        transition: filter .5s;

        &:hover {
        filter: brightness(0.9);
        
    }

    
    
}

`

export const TransactionTypeContainer =styled.div`
    display: inline-flex;
    justify-content: center;
    width: 100%;  

`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red'
}

const colors = {
    green: 'var(--button-income)',
    red: 'var(--button-withdraw)'
}

export const RadioBox = styled.button<RadioBoxProps>`
    width: 100%;
    height: 3.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    
    border:1px solid #d7d7d7;
    
    border-radius: 0.25rem;
    outline: none;
    
    background: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};

    transition: border-color .8s;
    

    &:first-child {
        margin-right: .2rem;
        
    }

    &:last-child {
        margin-left: .2rem;
        
    }

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        width:1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }

    span {
        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title)
    }
    

`