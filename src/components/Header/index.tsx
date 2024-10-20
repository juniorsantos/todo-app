import {BackButton, BackIcon, Container, Logo} from "@components/Header/style";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean
}

export default function Header({ showBackButton = false}: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
          <Logo source={logoImg}/>
        </Container>
    );
}
