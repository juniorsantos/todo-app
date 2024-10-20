import { SafeAreaView } from 'react-native-safe-area-context'
import styled, {css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 70px;
`;

export const FormContainer = styled.View`
    flex-direction: row;
    margin-top: -27px;
`;