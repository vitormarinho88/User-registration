import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import TopBackground from '../../components/TopBackground';
import api from "../../sevices/api";
import { useEffect, useState } from "react"; //Hook
import Title from "../../components/Title";

import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from './styles.js';


import Trash from '../../assets/trash.svg';

function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)
    
        const updateUsers = users.filter(user => user.id !== id)
        
        setUsers(updateUsers)
    }


    const navigate = useNavigate()

    function voltar() {
        Navigate('/')
    }

    return (
        <Container>
            <TopBackground></TopBackground>

            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${user.id}`} alt='avatar' />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUser(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )

}

export default ListUsers;


//useEffect -> TODA VEZ que a tela carrega, o useEffect é chamado - Por isso se usa um assync/await
//TODA VEZ que uma determinada variavel MUDA de valor , ele é chamado