import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './index';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient'; 


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
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
            <ImageBackground source={require('../../assets/images/dots-bg.png')} resizeMode='cover' style={styles.image}>
                <View style={styles.signinContainer}>
                    <BlurView intensity={30} style={styles.blurView} />
                    <Text style={styles.titleText}>Tunescape</Text>
                    <View style={styles.chooseBtns}>
                        <TouchableOpacity style={styles.activeBtn}>
                            <Text style={styles.btnText}>Sign up</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.btn} onPress={switchScreen}>
                            <Text style={styles.btnText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            style={styles.passwordField} 
                            placeholder="  Email address" 
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            style={styles.passwordField} 
                            secureTextEntry={!showPassword}
                            placeholder="  Enter Password" 
                            value={password}
                            onChangeText={setPassword}
                        />
                            <MaterialCommunityIcons 
                                name={showPassword ? 'eye' : 'eye-off'}
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
                                name={showPassword ? 'eye' : 'eye-off'}
                                size={24}
                                color='white'
                                onPress={toggleShowPassword}
                            />
                    </View>
                    <TouchableOpacity style={styles.signinBtn} onPress={checkTextInput}>
                        <LinearGradient colors={['#ed21ff', '#6c00fa', '#3700b8']} start={{x:0, y:1}} end={{x:1, y:1}} style={styles.gradientBtn}>
                            <Text style={styles.btnText}>Sign up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ImageBackground>
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
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    signinContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'rgba(150,150,150,0.15)',
        borderColor: 'rgba(255,255,255,0.25)',
        marginHorizontal: 'auto',
        overflow: 'hidden',
    },
    titleText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
    chooseBtns: {
        flexDirection: 'row',
        width: '77%',
        height: '11%',
        justifyContent: 'space-evenly',
        marginBottom: 50,
        marginTop: 20,
    },
    activeBtn: {
        borderRadius: 10,
        width: '40%',
        backgroundColor: 'rgb(0, 166, 255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        borderRadius: 10,
        width: '40%',
        backgroundColor: 'rgb(0, 75, 224)',
        justifyContent: 'center'
    },
    btnText: {
        flex: 1,
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    passwordField: {
        flex: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
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
    blurView: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20, 
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
