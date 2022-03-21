import styled from 'styled-components'


export const Container = styled.div`

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

        @media(max-width: 650px) {

            th {
                display:none;
            }

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

        @media(max-width: 650px){
            td {
                display: flex;
                width: 100%;
                

                &:last-child,
                &:nth-child(3n){
                    display: inline-flex;
                    justify-content: flex-end;
                    width: 13rem;
                }

                &:nth-child(3n) {
                    border-radius: 0px 0px 0px 10px;
                }

                &:first-child {
                    border-radius: 10px 10px 0px 0px;
                }

                &:last-child {
                    border-radius: 0px 0px 10px 0px;
                }
            }
        }

        
    }

    @media(max-width: 650px) {
        table {
            width: unset;
            margin: 0 auto;
        }
    }

    

`