import logo from '../.././assets/logo.png';

import { Container } from './styles';
import './index.css';

function SignIn() {

    return (
        <Container className="sign-in-page">
            <img src={logo} alt="CL Logo" />
            <input type="text" defaultValue="test@email.com" />
            <input type="password" defaultValue="12345678" />
            <button onClick={() =>{}}>
                Entrar
            </button>
        </Container>
    )
}

export default SignIn;