import { SafeAreaView, StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';
import { BlurView } from 'expo-blur';


type InstructionsScreen = NativeStackNavigationProp<RootStackParamList, 'Instructions'>;


export default function Instructions() {
    const navigation = useNavigation<InstructionsScreen>();

    const nextScreen = () => {
        navigation.navigate('Quiz');
    };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
            <Text style={styles.text}>Complete this short quiz to set your preferences.</Text>
            <TouchableOpacity style={styles.startBtn} onPress={nextScreen}>
                <LinearGradient colors={['#ed21ff', '#6c00fa']} start={{x:1, y:0}} end={{x:1, y:1}} style={styles.gradientBtn}>
                    <Text style={styles.startText}>Start</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'white',
        fontSize: 20,
        justifyContent: 'center',
    },
    startText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
    startBtn: {
        borderRadius: 20,
        width: '80%',
        height: '8%',
        backgroundColor: 'blue',
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20, 
    },
    gradientBtn: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
