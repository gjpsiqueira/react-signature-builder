import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto Mono', monospace;
        background:#F9F9F9;
    }
    @keyframes flipdown {
        0% {
            opacity: 0;
            transform-origin: top center;
            transform: rotateX(-90deg);
        }
        90% {
            opacity: 1;
        }
        100% {
            transform-origin: top center;
            transform: rotateX(0deg);
        }
    }
`
export default GlobalStyle