import { Button } from "./styles.js";

//spread operator -> Copia ou espelha Todo o resto 
function ButtonDefault({ children,theme, ...props }) {

   console.log(props)
 
    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}


export default ButtonDefault; 






///Exemplo de PropTypes na aula , com o erro de children//

// EXEMPLO INSTALAÇÃO NO TERMINAL: (yarn add prop-types)

// ButtonDefault.propTypes = {
//    children: PropTypes.node.isRequired
// }