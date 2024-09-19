import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/home";
import Login from "./pages/login/login";

const Pile = createStackNavigator() // é uma pilha de telas por onde eu vou navegar

export default function Routers() {
    return (
        <NavigationContainer>
            <Pile.Navigator>
                <Pile.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />

                <Pile.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
            </Pile.Navigator>
        </NavigationContainer>
    );
}