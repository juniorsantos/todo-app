import { Dispatch, SetStateAction, useState } from "react";
import {Container} from "@components/Input/style";

type Props = {
    value: string;
    onChangeText: Dispatch<SetStateAction<string>>;
}

export function Input({value, onChangeText}: Props) {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        setIsFocused(false);
    }

    return (
        <Container
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            isFocused={isFocused}
         />
    )
}