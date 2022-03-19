import styled from 'styled-components'

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