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
    { question: 'What genre of instrumental music do you prefer?', options: ['nature sounds', 'classical', 'jazz', 'ambient', 'electronic', 'cinematic', 'no preference'] }, 
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
                <Text style={styles.questionNumber}>1/4</Text>
                <Text style={styles.question}>What kind of music do you prefer</Text>
                <View style={styles.optionsContainer}>
                    <BlurView intensity={40} style={[StyleSheet.absoluteFillObject, {borderRadius: 20}]} />
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="first"
                            status={selectedValue === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('first')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Classical</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="second"
                            status={selectedValue === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('second')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Ambient</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="third"
                            status={selectedValue === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('third')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Jazz</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="fourth"
                            status={selectedValue === 'fourth' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('fourth')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Electronic</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="fifth"
                            status={selectedValue === 'fifth' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('fifth')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Nature Sounds</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="sixth"
                            status={selectedValue === 'sixth' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('sixth')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>Cinematic</Text>
                    </View>
                    <View style={styles.radioBtn}>
                        <RadioButton
                            value="seventh"
                            status={selectedValue === 'seventh' ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('seventh')}
                            color="#007BFF"
                            />
                        <Text style={styles.btnText}>No Preference</Text>
                    </View>
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
        alignItems: 'flex-start',
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'rgba(197,214,255,0.2)',
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.15)'
    },
    btnText: {
        color: 'white',
        fontSize: 24,
    },
    question: {
        color: 'white',
        fontSize: 35,
    },
    questionNumber: {
        color: 'white',
        fontSize: 15,
        alignItems: 'flex-start',
    },
    radioBtn: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
});
