import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';
import { RadioButton } from 'react-native-paper';
import { BlurView } from 'expo-blur';


type QuizScreen = NativeStackNavigationProp<RootStackParamList, 'Quiz'>;

const questions = [
    { question: 'What type of music do you prefer?', options: ['Nature Sounds', 'Classical', 'Jazz', 'Ambient', 'Electronic', 'No Preference'] }, 
    { question: 'Which instruments do you enjoy the most in instrumental music?', options: ['piano', 'guitar', 'strings', 'synths', 'percussion', 'no preference'] },
    { question: 'What tempo do you prefer?', options: ['slow', 'moderate', 'fast', 'no preference'] },
    { question: 'How energetic do you want the music to be?', options: ['calm and soothing', 'lively and upbeat'] }
];

export default function Quiz() {
    const [selectedValue, setSelectedValue] = useState('first');
    const [checked, setChecked] = useState(false);

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
            <ImageBackground source={require('../../assets/images/dots-bg.png')} resizeMode='cover' style={styles.image}>
                <View style={styles.numsAndQuestionContainer}>
                    <Text style={styles.questionNumber}>1/4</Text>
                    <Text style={styles.question}>{questions[0].question}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    <BlurView intensity={30} style={styles.blurView} />
                    {questions[0].options.map((option, index) => (
                        <View key={index} style={styles.radioBtn}>
                            <RadioButton
                                value={`option${index}`}
                                status={selectedValue === `option${index}` ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedValue(`option${index}`)}
                                color="#007BFF"
                                />
                            <Text style={styles.btnText}>{option}</Text>
                        </View>
                    ))}  
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    optionsContainer: {
        alignItems: 'center',
        width: '95%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'rgba(150,150,150,0.15)',
        borderColor: 'rgba(255,255,255,0.25)',
        marginHorizontal: 'auto',
        overflow: 'hidden',
        bottom: 40,
    },
    btnText: {
        color: 'white',
        fontSize: 24,
    },
    numsAndQuestionContainer: {
        flex: 1,
        marginHorizontal: 'auto',
        marginTop: '15%',
        padding: 5,
    },
    question: {
        color: 'white',
        fontSize: 35,
        justifyContent: 'center',
    },
    questionNumber: {
        color: 'white',
        fontSize: 22,
        alignItems: 'flex-start',
        marginBottom: '5%',
    },
    radioBtn: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20, 
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'blue',
        borderRadius: 15,
        width: '20%',
        alignItems: 'center',
    },
});
