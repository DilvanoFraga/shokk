import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiG8-awyrWCAxVjjZUCHYN5C3MQFnoECAkQAQ&url=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dpt_BR&usg=AOvVaw2tSOSr8C_HdW62WCfZyZH2&opi=89978449" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjb6YvMyrWCAxUvppUCHTJcDdUQFnoECAsQAQ&url=https%3A%2F%2Ftwitter.com%2Flogin%3Flang%3Dpt&usg=AOvVaw24nEAz2rTA9h462Y2mlmEX&opi=89978449" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwju14biyrWCAxVds5UCHbqQBfkQFnoECAkQAQ&url=https%3A%2F%2Fwww.instagram.com%2F&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm&opi=89978449" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape