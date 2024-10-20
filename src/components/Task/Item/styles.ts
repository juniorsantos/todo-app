import styled  from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";

type Props = {
    isChecked: boolean;
}

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-color:  ${({theme}) => theme.COLORS.GRAY_500};
    border-width: 1px;
    padding: 12px 8px;
    border-radius: 8px;
    min-height: 64px;
    margin-bottom: 8px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    flex-shrink: 1;
`;

export const Checkbox = styled.View<Props>`
    height: 18px;
    width: 18px;
    border-width: 2px;
    border-radius: 9px;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    border-color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
    background-color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.PURPLE : theme.COLORS.GRAY_500};
`;

export const CheckboxIcon = styled(Feather).attrs(({ theme, name }) => ({
    size: 10,
    name: name,
    color: theme.COLORS.GRAY_100
}))``;

export const ContentText = styled.Text<Props>`
    color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
    text-decoration: ${({isChecked }) => isChecked ? "line-through" : "none"};
    text-decoration-color: ${({ theme, isChecked }) => isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
`;

export const ButtonTrash = styled(TouchableOpacity)`
    height: 38px;
    width: 32px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Feather).attrs(({ theme, name }) => ({
    size: 18,
    name: name,
    color: theme.COLORS.GRAY_300
}))``;