import { Title } from './styles.js'

function H1Title({ children, theme, ...props }) {

    console.log(props)

    return (

        <Title {...props} theme={theme}>{children}</Title>

    )

}

export default H1Title; 