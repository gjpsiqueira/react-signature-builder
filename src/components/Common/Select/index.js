import React from 'react'
import * as S from './styled'

const Select = ({ onChange, children }) => {

    return (
        <S.Container>
            <S.Select onChange={onChange}>
                { children }
            </S.Select>
        </S.Container>

    )
}

export default Select