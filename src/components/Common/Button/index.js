import React from 'react'
import * as S from './styled'

export const PrimaryButton = ({ onClick, children }) => (
    <S.StyledButton primary onClick={onClick}> {children} </S.StyledButton>
)

export const SecondaryButton = ({ onClick, children }) => (
    <S.StyledButton secondary onClick={onClick}> {children} </S.StyledButton>
)
