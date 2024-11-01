import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';

type signupScreen = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function TabFiveScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation<signupScreen>();
    
    const handleSubmit = () => {
        if (password != confirmPassword) {
            alert('Passwords do not match');
        }
        else if (password == confirmPassword) {
            navigation.navigate('Login');
        }
    }; 

    const switchScreen = () => {
        navigation.navigate('Login');
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const checkTextInput = () => {
        if (!email.trim()) {
            alert('Please enter email')
        }
        if (!password.trim()) {
            alert('Please enter password')
        }
        if (!confirmPassword.trim()) {
            alert('Please confirm password')
        }
        else {
            handleSubmit();
        }
    };

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.signinContainer}>
            <Text style={styles.titleText}>Tunescape</Text>
            <View style={styles.chooseBtns}>
                <TouchableOpacity style={styles.activeBtn}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btn} onPress={switchScreen}>
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
            <View style={styles.passwordContainer}>
                <TextInput 
                    style={styles.passwordField} 
                    secureTextEntry={!showPassword}
                    placeholder="  Confirm Password" 
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                    <MaterialCommunityIcons 
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color='white'
                        onPress={toggleShowPassword}
                    />
            </View>
            <TouchableOpacity style={styles.signinBtn} onPress={checkTextInput}>
                <Text style={styles.btnText}>Sign up</Text>
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
    },
    btn: {
        borderRadius: 10,
        width: '40%',
        backgroundColor: 'blue',
        marginLeft: 30,
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
        marginBottom: 20,
        padding: 10
    },
    signinBtn: {
        borderRadius: 10,
        width: '77%',
        height: '11%',
        backgroundColor: 'blue',
        marginTop: 10
    },
});
