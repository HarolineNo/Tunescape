import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabFiveScreen from './signup';
import TabSixScreen from './login';
import Instructions from './quizInstructions';
import Quiz from './quiz';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import TabThreeScreen from './genres';

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Instructions: undefined;
  Quiz: undefined;
  Question2: undefined;
  Question3: undefined;
  Question4: undefined;
  Genres: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={TabFiveScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={TabSixScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Instructions' component={Instructions} options={{ headerShown: false }} />
      <Stack.Screen name='Quiz' component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name='Question2' component={Question2} options={{ headerShown: false }} />
      <Stack.Screen name='Question3' component={Question3} options={{ headerShown: false }} />
      <Stack.Screen name='Question4' component={Question4} options={{ headerShown: false }} />
      <Stack.Screen name='Genres' component={TabThreeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>  
  );
}

