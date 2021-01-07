import styled from 'styled-components'

export const Wrapper = styled.aside`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 25%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(51, 71, 91);
    will-change: transform;
    transform: translateX(0px);
`

export const Container = styled.div`
    position: relative;
    width: 100%;
`

export const Title = styled.h2`
    color:#FFF;
    font-weight: bold;
    font-size:1.5rem;
    text-align:center;
    margin-top:30px;
`

export const ContainerForm = styled.form`
    margin-top:30px;
`
