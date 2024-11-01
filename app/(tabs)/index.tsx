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

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  Instructions: undefined;
  Quiz: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={TabFiveScreen} />
      <Stack.Screen name='Login' component={TabSixScreen} />
      <Stack.Screen name='Instructions' component={Instructions} />
      <Stack.Screen name='Quiz' component={Quiz} />
    </Stack.Navigator>  
  );
}

