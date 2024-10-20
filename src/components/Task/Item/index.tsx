import {ButtonTrash, Checkbox, CheckboxIcon, Container, Content, ContentText, Icon} from "./styles";
import {Task} from "@components/Task/types";

type Props = {
    item: Task;
    removeTask: (taskIdToBeRemoved: number) => void;
    toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function Item({item, removeTask, toggleTaskCheck}: Props) {
    function handleRemoveTask() {
        removeTask(item.id);
    }

    function handleToggleTaskCheck() {
        toggleTaskCheck(item.id);
    }

    return (
        <Container onPress={handleToggleTaskCheck}>
            <Content>
                {item.isChecked ? (
                    <Checkbox isChecked={item.isChecked}>
                        <CheckboxIcon name="check"/>
                    </Checkbox>
                ) : (<Checkbox isChecked={item.isChecked}/>)}
                <ContentText isChecked={item.isChecked}>
                    {item.text}
                </ContentText>
            </Content>
            <ButtonTrash onPress={handleRemoveTask}>
                <Icon
                    name="trash-2"
                />
            </ButtonTrash>
        </Container>
    )
}