import React from 'react'
import { InputText, PrimaryButton, SecondaryButton } from '../Common'
import { useInputValue } from '../Contexts/InputContext'
import * as S from './styled'

const Sidebar = () => {
    const { data, updateData } = useInputValue()
    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Insira suas informações para assinatura </S.Title>
            </S.Container>
            <S.ContainerForm>
                <InputText name="email" value={data.email} label="Email" onBlur={updateData} />
                <InputText name="Telefone" label="Telefone" />
                <InputText name="Setor" label="Setor" />
                <PrimaryButton>salvar assinatura</PrimaryButton>
                <SecondaryButton>orientações</SecondaryButton>
            </S.ContainerForm>
        </S.Wrapper>
    )
}

export default Sidebar