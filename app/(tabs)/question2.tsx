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
import { LinearGradient } from 'expo-linear-gradient'; 


type Question2Screen = NativeStackNavigationProp<RootStackParamList, 'Question2'>;

const questions = [
    { question: 'What type of music do you prefer?', options: ['Electronic', 'Jazz', 'Lofi', 'Ambient', 'No Preference'] }, 
    { question: 'Which instruments do you enjoy the most in instrumental music?', options: ['Piano', 'Guitar', 'Strings', 'Synths', 'Percussion', 'No Preference'] },
    { question: 'What tempo do you prefer?', options: ['Slow', 'Moderate', 'Fast', 'No Preference'] },
    { question: 'How energetic do you want the music to be?', options: ['Calm and Soothing', 'Lively and Upbeat'] }
];

export default function Question2() {
    const [selectedValue, setSelectedValue] = useState('first');
    const navigation = useNavigation<Question2Screen>(); 

    const nextQuestion = () => {
        navigation.navigate('Question3');
    };

    const previousQuestion = () => {
        navigation.navigate('Quiz');
    };

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
            <ImageBackground source={require('../../assets/images/dots-bg.png')} resizeMode='cover' style={styles.image}>
                <View style={styles.numsAndQuestionContainer}>
                    <Text style={styles.questionNumber}>2/4</Text>
                    <Text style={styles.question}>{questions[1].question}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    <BlurView intensity={30} style={styles.blurView} />
                    {questions[1].options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.optionBtn, selectedValue === `option${index}` && styles.selectedOption]}
                            onPress={() => setSelectedValue(`option${index}`)}
                        >
                            <Text style={[styles.optionText, selectedValue === `option${index}` && styles.selectedOptionText]}>{option}</Text>
                        </TouchableOpacity>
                    ))}  
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={previousQuestion}>
                        <LinearGradient colors={['#ed21ff', '#6c00fa', '#3700b8']} start={{x:0, y:1}} end={{x:1, y:1}} style={styles.gradientBtn}>
                            <Text style={styles.btnText}>Previous</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={nextQuestion}>
                        <LinearGradient colors={['#ed21ff', '#6c00fa', '#3700b8']} start={{x:0, y:1}} end={{x:1, y:1}} style={styles.gradientBtn}>
                            <Text style={styles.btnText}>Next</Text>
                        </LinearGradient>
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
    optionText: {
        color: 'white',
        fontSize: 24,
        marginLeft: '2%',
    },
    btnText: {
        color: 'white',
        fontSize: 24,
    },
    numsAndQuestionContainer: {
        flex: 1,
        marginHorizontal: 'auto',
        marginTop: '20%',
        padding: 7,
    },
    question: {
        color: 'white',
        fontSize: 38,
        justifyContent: 'center',
    },
    questionNumber: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        marginBottom: '5%',
    },
    optionBtn: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(150,150,150,0.15)',
    },
    selectedOption: {
        backgroundColor: 'rgb(0, 255, 233)', 
    },
    selectedOptionText: {
        color: 'black', 
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20, 
    },
    btnContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        bottom: 20,
        marginTop: '5%',
    },
    btn: {
        backgroundColor: '#6c00fa',
        borderRadius: 10,
        width: '35%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientBtn: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
    },
});