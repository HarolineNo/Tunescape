import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';

type InstructionsScreen = NativeStackNavigationProp<RootStackParamList, 'Instructions'>;


export default function Instructions() {
    const navigation = useNavigation<InstructionsScreen>();

    const nextScreen = () => {
        navigation.navigate('Quiz');
    };

    return (
    <SafeAreaView style={styles.container}>
        <Text style={{color: 'white'}}>Answer questions to set preferences</Text>
        <TouchableOpacity style={styles.signinBtn} onPress={nextScreen}>
            <Text>Start</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#08081e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
    },
    signinContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2e2cb2',
        height: '60%',
        width: '85%',
        borderRadius: 20
    },
    titleText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
    chooseBtns: {
        flexDirection: 'row',
        width: '85%',
        height: '11%',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 20,
    },
    activeBtn: {
        borderRadius: 10,
        width: '40%',
        backgroundColor: '#c5d6ff',
        marginLeft: 30,
    },
    btn: {
        borderRadius: 10,
        width: '40%',
        backgroundColor: 'blue',
    },
    btnText: {
        flex: 1,
        fontSize: 24,
        padding: 10,
        color: 'white',
        textAlign: 'center',
    },
    inputField: {
        backgroundColor: '#7797e8',
        height: '10%',
        width: '77%',
        borderRadius: 5,
        marginBottom: 20,
        padding: 10
    },
    passwordField: {
        flex: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7797e8',
        borderRadius: 5,
        width: '77%',
        height: '10%',
        marginBottom: 5,
        padding: 10
    },
    signinBtn: {
        borderRadius: 10,
        width: '77%',
        height: '11%',
        backgroundColor: 'blue',
        marginTop: 10
    },
    remeberMeContainer: {
        width: '77%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    checkbox: {
        borderColor: 'white',
        borderWidth: 1,
        width: 12,
        height: 12,
        marginRight: 5
    },
});
