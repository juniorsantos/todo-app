import styled, { css }  from "styled-components/native";
import { TextInput } from "react-native";
import {Dispatch, SetStateAction} from "react";

type Props = {
    isFocused: boolean;
}

export const Container = styled(TextInput)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        background-color: ${theme.COLORS.GRAY_500};
        
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
    `};

    border-radius: 6px;
    padding: 16px;
    border-color: ${({ theme, isFocused }) => isFocused ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`;