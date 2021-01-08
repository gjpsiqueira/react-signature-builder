import React from 'react'
import * as S from './styled'

const Select = ({ name, onChange, children }) => {

    return (
        <S.Container>
            <S.Select name={name} onChange={onChange}>
                { children }
            </S.Select>
        </S.Container>

    )
}

export default Select