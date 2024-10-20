import {FormContainer, Container, Content} from "@screens/Todo/style";
import {ListTask} from "@components/Task";
import {useState} from "react";
import {Task} from "@components/Task/types";
import Header from "@components/Header";
import {Feather} from "@expo/vector-icons";
import {Button} from "@components/Button";
import {Input} from "@components/Input";

export function Todo() {
    const [newTaskValue, setNewTaskValue] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    function removeTask(taskIdToBeRemoved: number) {
        const filteredTasks = tasks.filter(task => task.id !== taskIdToBeRemoved);

        setTasks(filteredTasks);
    }

    function toggleTaskCheck(taskIdToBeChecked: number) {
        const immutableTasks = tasks.map(task => ({...task}));

        const taskToBeUpdated = immutableTasks.find(task => task.id === taskIdToBeChecked);

        if (taskToBeUpdated) {
            taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked;
            setTasks(immutableTasks);
        }
    }

    function addTask() {
        if (!newTaskValue) {
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            text: newTaskValue,
            isChecked: false
        }

        setTasks(oldTasks => [...oldTasks, newTask]);
    }

    return (
        <Container>
            <Header/>
            <Content>
                <FormContainer>
                    <Input
                        value={newTaskValue}
                        onChangeText={setNewTaskValue}
                    />
                    <Button
                        onPress={addTask}
                    >
                        <Feather
                            name="plus-circle"
                            size={16}
                            color="#F2F2F2"
                        />
                    </Button>
                </FormContainer>

                <ListTask
                    data={tasks}
                    removeTask={removeTask}
                    toggleTaskCheck={toggleTaskCheck}
                />
            </Content>
        </Container>
    );
}
