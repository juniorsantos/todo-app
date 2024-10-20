import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";

export const Container = styled(TouchableOpacity)`
    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
    border-radius: 6px;
    height: 52px;
    width: 52px;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
`;