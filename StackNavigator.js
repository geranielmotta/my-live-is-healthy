import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';

import FoodTips from './screens/FoodTips';

import MyResults from './screens/MyResults';

import HomeWorkoutsScreen from './screens/Workouts';
import WorkoutScreen from './screens/Workouts/WorkoutScreen';
import FitScreen from './screens/Workouts/FitScreen';
import RestScreen from './screens/Workouts/RestScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />

      <Stack.Screen options={{headerShown: false}} name="FoodTips" component={FoodTips} />

      <Stack.Screen options={{headerShown: false}} name="MyResults" component={MyResults} />

      {/* Workouts */}
        <Stack.Screen options={{headerShown: false}} name="HomeWorkouts" component={HomeWorkoutsScreen} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator