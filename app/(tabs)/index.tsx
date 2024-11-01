import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabFiveScreen from './signup';
import TabSixScreen from './login';

export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={TabFiveScreen} />
      <Stack.Screen name='Login' component={TabSixScreen} />
    </Stack.Navigator>  
  );
}

