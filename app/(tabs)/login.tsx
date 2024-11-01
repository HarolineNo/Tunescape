import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Checkbox from 'expo-checkbox';


export default function TabSixScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remeber, setRemeber] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const remeberMe = async () => {
        if (remeber) {
            await SecureStore.setItemAsync('email', email);
            await SecureStore.setItemAsync('password', password);
        }
    };
    useEffect(() => {
        const checkLogin = async () => {
            const storedEmail = await SecureStore.getItemAsync('email');
            const storedPassword = await SecureStore.getItemAsync('password');

            if (storedEmail && storedPassword) {
                setEmail(storedEmail);
                setPassword(storedPassword);
            }
        };
        checkLogin();
    }, []);

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.signinContainer}>
            <Text style={styles.titleText}>Tunescape</Text>
            <View style={styles.chooseBtns}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.activeBtn}>
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
                style={styles.inputField} 
                placeholder="  Email address" 
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
                <TextInput 
                    style={styles.passwordField} 
                    secureTextEntry={!showPassword}
                    placeholder="  Enter Password" 
                    value={password}
                    onChangeText={setPassword}
                />
                    <MaterialCommunityIcons 
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color='white'
                        onPress={toggleShowPassword}
                    />
            </View>
            <View style={styles.remeberMeContainer}>
                <Checkbox style={styles.checkbox} value={remeber} onValueChange={setRemeber} />
                <Text style={{color: 'white'}}>Remeber Me</Text>
            </View>
            <TouchableOpacity style={styles.signinBtn}>
                <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
        </View>
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
