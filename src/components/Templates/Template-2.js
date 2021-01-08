import React from 'react'
import { useInputValue } from '../Contexts/InputContext'

const Template2 = () => {

    const { data } = useInputValue()
    return (
        <table style={{
            backgroundImage:'url(https://www.unipac.br/assinaturaemail/assets/bg.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width:'768px',
            height:'170px'

        }}>
            <tbody>
                <tr>
                    <td width="200">
                        {data.unidade == 0 && 
                            <img style={{marginLeft:'25px'}} src={'https://www.unipac.br/assinaturaemail/assets/logobarbacena.png'} width="100" />
                        }
                    </td>
                    <td width="390">
                        <h3 style={{color:'#eb7037',margin: '0px'}}>
                            <span>
                                {data.nome}
                            </span>
                        </h3>
                        <p style={{margin: '0px'}}>{data.setor}</p>

                        <table style={{marginTop:'10px',verticalSpacing: '-webkit-baseline-middle',display: 'inline-block',}} cellPadding="0" cellSpacing="0">
                            <tbody >
                                <tr>
                                    <td>
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/telefone.png'} width="20" />
                                    </td>
                                    <td width="3"></td>
                                    <td>
                                        {data.telefone}
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/nosamamoseducacao.png'} style={{maxWidth: '150px',display: 'block',}} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table cellPadding="0" cellSpacing="0"
                            style={{
                                verticalSpacing: '-webkit-baseline-middle',
                                fontSize: 'medium',
                                display: 'inline-block',
                            }}>
                            <tbody>
                                <tr>
                                    <td colspan="4">
                                        <p style={{fontSize: '12px',textAlign:'center'}}>Siga nossas redes sociais</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="https://www.instagram.com/unipacbarbacena/?hl=pt-br"
                                            >
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/instagram.png'} alt="instagram" width="28" />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="https://www.facebook.com/unipacoficial/"
                                            style={{display:'inline-block',padding:'0px'}}>
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/facebook.png'} alt="facebook" width="28" />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="https://wa.me/5532988459028"
                                            style={{display:'inline-block',padding:'0px'}}>
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/whatsapp.png'} alt="whatsapp" width="28" />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="https://br.linkedin.com/school/centro-universitario-presidente-antonio-carlos/"
                                            style={{display:'inline-block',padding:'0px'}}>
                                        <img src={'https://www.unipac.br/assinaturaemail/assets/linkedin.png'} alt="linkedin" width="28" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>

        </table>
    )
}

export default Template2