import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Cursos" component={CoursesScreen} />
    </Stack.Navigator>
  );
}
