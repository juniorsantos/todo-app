import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Todo } from '@screens/Todo';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="todo"
                component={Todo}
            />
        </Navigator>
    );
}