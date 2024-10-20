import {Clipboard, Container, SubTitle, Title} from "./styles";
import clipboardImg from '@assets/clipboard.png';

export function Empty() {
    return (
        <Container>
            <Clipboard source={clipboardImg}/>
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <SubTitle>Crie tarefas e organize seus itens a fazer</SubTitle>
        </Container>
    )
}