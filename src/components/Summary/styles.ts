import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: space-between;
    margin-top: -8.5rem;
    

    
    

    div { 
        width: 20rem;
        min-width:18rem;
        height: 10rem;
        background: var(--shape);       
        border-radius: 0.25rem;

        padding: 1.5rem;
        margin: 1rem;

        header {
            margin-bottom: 2rem;
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

        @media(max-width: 789px) {
            strong {
                font-size: 1.7rem;   
            }
        }
    }
`


