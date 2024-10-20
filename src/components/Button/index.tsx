import { TouchableOpacity } from "react-native";

import {Container } from "./styles";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    onPress: () => void;
}

export function Button({ children, onPress }: Props) {
    return (
        <Container onPress={onPress} activeOpacity={0.6}>
            {children}
        </Container>
    )
}