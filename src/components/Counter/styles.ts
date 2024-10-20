import styled from "styled-components/native";

type Props = {
    isFinished: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const ContainerContent = styled.View`
    width: 24px;
    height: 24px;
    background-color: #333333;
    border-radius: 50%;
    padding: 2px;
    margin-left: 8px;
    align-items: center;
    justify-content: center;
`;

export const ContainerContentText = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Description = styled.Text<Props>`
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme, isFinished }) => isFinished ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
`;