import './Colaborador.css'

const Colaborador = ({card, nick, funcao, corDefundo, hashtag}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDefundo}}>
                <img src={card} alt='Card'/>
            </div>
            <div className='rodape'>
                <h4>{nick}    #{hashtag}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default Colaborador