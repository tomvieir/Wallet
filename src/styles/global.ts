import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
   
   :root {
       --background: #f0f2f5;

       --red: #E52e54;
       --blue: #5429CC;
       --green: #33CC95;

       --blue-light: #6933FF;

       --text-title: #363f5f;
       --text-body: #969cb3;

        --shape: #FFFFFF;

        --button-income: rgba(8,185,8,0.10);
        --button-withdraw: rgba(185, 8, 11, 0.10);
   }
   
   
   * {
       margin:0;
       padding: 0;
       box-sizing: border-box;
   }


   html {
       min-width: 380px;

       @media (max-width: 1080px) {
           font-size: 93.75%;
       }

       @media (max-width: 720px) {
           font-size: 87.5%;
       }
   }


   body { 
       background: var(--background);
       -webkit-font-smoothing: antialised;
   }

   body,
   input,
   textarea,
   button {
       font-family: 'Poppins', sans-serif;
       font-weight: 400;
   }

   h1, h2, h3 , h4, h5, h6, strong {
       font-weight: 600;
   }

   button {
       cursor: pointer;
   }

   [disabled] {
       opacity: 0.6;
       cursor: not-allowed;
   }

   .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
    
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;   
   }
   @media(max-width:650px) {
       .react-modal-overlay{
           align-items: flex-end;
       }
   }

   .react-modal-content {
        width: 100%;
        max-width: 576px;

        position: relative;
        background: var(--background);
        border-radius: 0.3rem;
        padding: 3rem;
   }

   .react-modal-close {
        border: none;
        background: transparent;
        position: absolute;
        right: 0;
        top: 0;

        transform: translate(-100%, 100%);
        transition: filter .3s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`