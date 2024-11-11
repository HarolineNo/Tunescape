import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Audio } from 'expo-av';
import axios from 'axios';
import Constants from 'expo-constants';

const API_KEY = 'd4bef36ff24d4f30a013a82d67ff97cd';

const genres = [
    { title: '  Focus', image: require('../../assets/images/nature.jpg'), prompt: 'Create focus music' }, 
    { title: '  Relax', image: require('../../assets/images/relax.jpg'), prompt: 'Create focus music' },
    { title: '  Meditate', image: require('../../assets/images/meditate.jpg'), prompt: 'Create focus music' },
    { title: '  Motivation', image: require('../../assets/images/motivate.jpg'), prompt: 'Create focus music' }
];

export default function TabThreeScreen() {    

    const [isLoading, setIsLoading] = useState(false);
    const [sound, setSound] = useState(null);
    
    
    return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/images/dark-gradient-bg.jpg')} resizeMode='cover' style={styles.image}>
            <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFillObject} />
            <ScrollView>
                <Text style={styles.titleText}>Genres</Text>
                {genres.map((genre) => (
                    <TouchableOpacity key={genre.title} style={styles.card} onPress={() => generateMusic(genre.prompt)} disabled={isLoading}>
                        <ImageBackground style={styles.cardImage} source={genre.image} resizeMode='cover'>
                            <LinearGradient colors={['rgba(0, 0, 150, 0.4)', 'transparent']} style={styles.overlayView} />
                            <Text style={styles.cardText}>{genre.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </ImageBackground>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    titleText: {
        color: 'white',
        padding: 20,
        fontSize: 35,
        textAlign: 'left',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    cardText: {
        fontSize: 24,
        padding: 10,
        color: 'white',
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 30,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 20,
        resizeMode: 'cover',
        height: 150,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 10,
        shadowOffset: {
            width: 3, 
            height: 3
        },
        overflow: 'hidden'
    },
    cardImage: {
        height: '100%',
        width: '100%',
    },
    overlayView: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(119, 151, 232, 0.7)'
    }
});
