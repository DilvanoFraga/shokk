import CampoTexto from '../CampoTexto'
import './Formulario.css'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'

const Formulario = (props) => {

    const [nick, setNick] = useState('')
    const [hashtag, setHashtag] = useState('')
    const [card, setCard] = useState('')
    const [funcao, setFuncao] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nick,
            hashtag,
            card,
            funcao
        })

        setNick('')
        setHashtag('')
        setCard('')
        setFuncao('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do card do player</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nick" 
                    placeholder="Digite seu nick"
                    valor={nick}
                    aoAlterado={valor => setNick(valor)
                }/> 
                <CampoTexto 
                    obrigatorio={true} 
                    label="Hashtag do Jogador" 
                    placeholder="Hashtag do jogador"
                    valor={hashtag}
                    aoAlterado={valor => setHashtag(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Função" 
                    itens={props.funcoes}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto 
                    label="Card do Jogador"   
                    placeholder="Imagem do card jogador"
                    valor={card}
                    aoAlterado={valor => setCard(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario