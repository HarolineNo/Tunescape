import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Image, View, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';
import { RadioButton } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient'; 


type MusicPlayerScreen = NativeStackNavigationProp<RootStackParamList, 'MusicPlayer'>;

const questions = [
    { question: 'What type of music do you prefer?', options: ['Electronic', 'Jazz', 'Lofi', 'Ambient', 'No Preference'] }, 
    { question: 'Which instruments do you enjoy the most in instrumental music?', options: ['Piano', 'Guitar', 'Strings', 'Synths', 'Percussion', 'No Preference'] },
    { question: 'What tempo do you prefer?', options: ['Slow', 'Moderate', 'Fast', 'No Preference'] },
    { question: 'How energetic do you want the music to be?', options: ['Calm and Soothing', 'Lively and Upbeat'] }
];

export default function MusicPlayer() {
    const [selectedValue, setSelectedValue] = useState('first');
    const navigation = useNavigation<MusicPlayerScreen>(); 

    return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
                <View style={styles.musicContainer}>
                    <BlurView intensity={30} style={styles.blurView} />
                    <Image source={require('../../assets/images/record.png')} style={styles.record}/>
                    <Image source={require('../../assets/images/player.png')} style={styles.player}/>
                </View>
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
    musicContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(150,150,150,0.15)',
        padding: 30,
    },
    record: {
        width: '95%',
        height: '95%',
        resizeMode: 'contain'
    },
    player: {
        width: '80%',
        height: '50%',
        resizeMode: 'contain'
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
