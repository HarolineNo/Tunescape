import React, { useState } from 'react';
import { Animated, useAnimatedValue, SafeAreaView, StyleSheet, ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

export default function MusicPlayer() {
    const pauseButton = require('../../assets/images/pause-button.png');
    const playButton = require('../../assets/images/play-button.png');

    const [isPlaying, setIsPlaying] = useState(false);

    const toogleButton = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode="cover" style={styles.image}>
                <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFillObject} />
                <View style={styles.musicContainer}>
                    <Image source={require('../../assets/images/record.png')} style={styles.record} />
                    <View style={styles.songInfoContainer}>
                        <Text style={styles.songTitle}>Song Title</Text>
                    </View>
                    <View style={styles.controlsContainer}>
                        <TouchableOpacity style={styles.controlButton}>
                            <Image source={require('../../assets/images/previous-button.png')} style={styles.controlIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.controlButton, styles.playButton]} onPress={toogleButton}>
                            <Image source={isPlaying ? pauseButton : playButton} style={styles.controlIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButton}>
                            <Image source={require('../../assets/images/next-button.png')} style={styles.controlIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    musicContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    record: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    songInfoContainer: {
        alignItems: 'center',
        marginBottom: "40%",
    },
    songTitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    controlButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        width: 80,
        height: 80,
    },
    controlIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
