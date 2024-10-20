import {Container, ContainerContent, ContainerContentText, Description} from "./styles";

type Props = {
    description: string;
    value: number;
    isFinished: boolean;
}

export function Counter({description, value, isFinished}: Props) {
    return (
        <Container>
            <Description
                isFinished={isFinished}
            >
                {description}
            </Description>

            <ContainerContent>
                <ContainerContentText>
                    {value}
                </ContainerContentText>
            </ContainerContent>
        </Container>
    )
}