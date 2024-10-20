import {Counter} from "@components/Counter";

import {Container} from "./styles";
import {Task} from "@components/Task/types";
import {useMemo} from "react";

type Props = {
    data: Task[]
}

export function Header({data}: Props) {
    const checkedDataCounter = useMemo(() => {
        const filteredCheckedData = data.filter(item => item.isChecked);

        return filteredCheckedData.length;
    }, [data]);

    return (
        <Container>
            <Counter
                description="Criadas"
                value={data.length}
                isFinished={false}
            />

            <Counter
                description="Concluídas"
                value={checkedDataCounter}
                isFinished={true}
            />
        </Container>
    )
}