import { FlatList } from "react-native";
import {Container} from "./styles";
import {Task} from "@components/Task/types";
import {Header} from "@components/Task/Header"
import {Item} from "@components/Task/Item";
import {Empty} from "@components/Task/Empty"

type Props = {
    data: Task[]
    removeTask: (taskIdToBeRemoved: number) => void;
    toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function ListTask({data, removeTask, toggleTaskCheck}: Props) {
    return (
        <Container>
            <Header data={data} />
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item
                        item={item}
                        removeTask={removeTask}
                        toggleTaskCheck={toggleTaskCheck}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Empty />}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </Container>
    )
}