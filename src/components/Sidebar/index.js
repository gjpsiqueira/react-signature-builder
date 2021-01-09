import React from 'react'
import { InputText, Select, PrimaryButton, SecondaryButton } from '../Common'
import { useInputValue } from '../Contexts/InputContext'
import CopyToClipboard from '../Common/CopyToClipboard'
import * as S from './styled'


const unidades = [
    { label:'Barbacena' },
    { label:'Lafaiete' },
    { label:'Sabará' },
    { label:'FUNJOBE' },
    { label:'FUPAC SJN' },
    { label:'FUPAC Lambari' },
    { label:'FUPAC Baependi' },
    { label:'FUPAC Visconde do Rio Branco' },
    { label:'UNIPAC ITABIRITO' },

]
const Sidebar = () => {
    const { data, updateData } = useInputValue()
    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Insira suas informações para assinatura </S.Title>
            </S.Container>
            <S.ContainerForm>
                <InputText name="nome" value={data.nome} label="Nome" onBlur={updateData} />
                <InputText name="email" value={data.email} label="Email" onBlur={updateData} />
                <InputText name="telefone" value={data.telefone} label="Telefone" onBlur={updateData} />
                <InputText name="setor" value={data.setor} label="Setor" onBlur={updateData} />
                <Select name="unidade" onChange={updateData}>
                    {unidades.map((item,index) => (
                        <option value={index} key={index}>{item.label}</option>
                    ))}
                </Select>
                <div style={{marginTop:'80px'}} />
                <PrimaryButton onClick={() => CopyToClipboard('signatureMarkup')}>
                    salvar assinatura
                </PrimaryButton>
                <SecondaryButton>orientações</SecondaryButton>
            </S.ContainerForm>
        </S.Wrapper>
    )
}

export default Sidebar