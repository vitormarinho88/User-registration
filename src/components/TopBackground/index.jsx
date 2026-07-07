import { TopBackground } from './styles.js';

import UsersImage from '../../assets/users.png';

function BackGround({ children, ...props }) {
    return (
        <TopBackground>
           
            <img {...props} src={UsersImage} alt="imagem-usuarios" />

        </TopBackground>
    )
}


export default BackGround;