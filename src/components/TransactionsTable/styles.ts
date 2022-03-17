import styled from 'styled-components'


export const Container = styled.div`
    border: 1px solid red;
    

    table { 
        width: 100%;
        border-spacing:0 .5rem;


        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            background: var(--shape);
            color: var(--text-body);
            

            &:first-child {
                color: var(--text-title);

                -webkit-border-radius: 10px 0px 0px 10px;
                -moz-border-radius: 10px 0px 0px 10px;
                border-radius: 10px 0px 0px 10px;
            }

            &:last-child {
                -webkit-border-radius: 0px 10px 10px 0px;
                -moz-border-radius: 0px 10px 10px 0px;
                border-radius: 0px 10px 10px 0px;
            }

            &.deposit {
                color: var(--green)
            }

            &.withdraw {
                color: var(--red)
            }
            
        }
    }

`