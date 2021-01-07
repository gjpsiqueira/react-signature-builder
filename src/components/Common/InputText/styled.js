import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
`

export const Input = styled.input`
	width: 100%;
	font-family: 'Roboto Mono', monospace;
	height: 30px;
	padding: 0.5rem 0 0.5rem 0.5rem;
	margin-bottom: 3rem;
	font-size: 1.25rem;
	background: transparent;
	color: #FFF;
	border: none;
	border-bottom: 2px solid #e8e8e8;
	box-shadow: none;
	&:focus {
		outline: none;
	}
	&:focus {
		outline: none;
	}
	&:focus + label,
	&:valid + label {
		top: -0.75rem;
		transform: scale(0.8);
		left: 0;
	}
`

export const Label = styled.label`
	position: absolute;
	top: 1rem;
	left: 0.5rem;
	transition: all 0.2s ease-in-out;
	pointer-events: none;
	opacity: 0.5;
	color:#FFF;
`