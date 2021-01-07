import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
	outline: none;
    border: 1px solid transparent;

    ${props=> (props.primary && css`
        background-color:#EC662B;
    `)}

    ${props=> (props.secondary && css`
        background-color:#1D4064;
    `)}
    color:#fff;
    font-weight:bold;
    width:100%;
	font-family: inherit;
    padding: 0.8rem 1rem;
    text-transform:uppercase;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: color 0.1s ease-out, border-color 0.1s ease-out,
		background-color 0.1s ease-out;
	&:hover {
        ${props=> (props.primary && css`
            background-color:#FF4F02;
        `)}

        ${props=> (props.secondary && css`
            background-color:#0C1E31;
        `)}

        
	}
	&:active {
		background-color: #504a65;
	}
`