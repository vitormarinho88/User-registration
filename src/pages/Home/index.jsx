import { useRef } from "react";   //hook
import api from "../../sevices/api.js";
import { useNavigate } from "react-router-dom";///hook
import TopBackground from '../../components/TopBackground';
import Button from '../../components/button';
import  Title  from "../../components/Title";            


import {
  Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
} from "./styles.js";


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  const navigate = useNavigate()


  async function registerNewUser() {

    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    navigate('Lista-de-usuarios')


  }



  return (
    <Container>
      <TopBackground>

      </TopBackground>

      <Form>
        <Title  theme="primary">Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome<span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuario' ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuario' ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email<span>*</span>
          </InputLabel>
          <Input type='email' placeholder='Email do Usuario' ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>

      </Form>

      <Button type="button" onClick={() => navigate('Lista-de-usuarios')}>Ver Lista de Usuários</Button>

    </Container>


  )

}

export default Home;
