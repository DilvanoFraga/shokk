import Colaborador from '../Colaborador'
import './Funcao.css'

const Funcao = (props) => {
    const css  = {backgroundColor: props.corSecundaria}

    return (

        (props.colaboradores.length > 0) ? <section className='funcao'style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDefundo={props.corPrimaria} key={colaborador.nick} nick={colaborador.nick} funcao={colaborador.funcao} card={colaborador.card} hashtag={colaborador.hashtag}/>)}
            </div>
        </section>

        :''
    )

}

export default Funcao