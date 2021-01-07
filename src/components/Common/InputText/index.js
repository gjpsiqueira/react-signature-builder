import React, { FormEvent } from 'react'
import * as S from './styled'

const InputText = ({ onBlur, value, name, label }) => {

    return (
        <S.Container>
            <S.Input type="text" name={name} onBlur={onBlur} required />
            <S.Label htmlFor={name}>{label}</S.Label>
        </S.Container>
    )
}


export default InputText