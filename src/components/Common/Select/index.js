import React from 'react'
import * as S from './styled'

const Select = ({ children }) => {

    return (
        <S.Container>
            <S.Select>
                { children }
            </S.Select>
        </S.Container>

    )
}

export default Select