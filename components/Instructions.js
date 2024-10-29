import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Intructions ({ navigation }) {
    return (
        <NavigationContainer>
            <Text>This is a short quiz to find your prefences</Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Questions')}}>
                <Text>Start</Text>
            </TouchableOpacity>
        </NavigationContainer>
    );
}