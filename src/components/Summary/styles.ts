import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -7rem;

    
    

    div { 
        width: 20rem;
        background: var(--shape);       
        border-radius: 0.25rem;

        padding: 1.5rem;

        header {
            
            display: flex;
            justify-content: space-between
        }

        strong {
            font-size: 2rem;
            font-weight: 400;
            
        }

        &.higlight-content {
            background: var(--green);
            color: #FFF;
        }
    }
`


