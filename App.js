import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  { PockemonList }  from './pages/PockemonList';
import Home from './pages/Home';
import { PockemonDetails } from "./components/PockemonDetails";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PockemonList" component={PockemonList} />
        <Stack.Screen name="PockemonDetails" component={PockemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

// const styles = StyleSheet.create({
//   container: {
   
//   },
// });
