import { SafeAreaView, StyleSheet, ImageBackground, View, Platform, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';

const genres = [
    { title: '  Focus', image: require('@/assets/images/nature.jpg') }, 
    { title: '  Relax', image: require('@/assets/images/nature.jpg') },
    { title: '  Meditate', image: require('@/assets/images/nature.jpg') },
    { title: '  Motivation', image: require('@/assets/images/nature.jpg') }
];

export default function TabThreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#151452', '#3533cd']} start={{x:0, y:1}} end={{x:1, y:1}} style={styles.background}>
        <Text style={styles.titleText}>Genres</Text>
            <ScrollView>
                {genres.map((genre) => (
                    <TouchableOpacity style={styles.card}>
                        <ImageBackground style={styles.cardImage} source={genre.image} resizeMode='cover'>
                            <View style={styles.overlayView} />
                            <Text style={styles.cardText}>{genre.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </LinearGradient>
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
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'left',
        backgroundColor: 'rgba(0, 15, 52, 0.6)'
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    cardText: {
        fontSize: 24,
        padding: 5,
        color: 'white',
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 25,
        marginLeft: '2%',
        width: '96%',
        borderRadius: 30,
        resizeMode: 'cover',
        height: 200,
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
        backgroundColor: 'rgba(119, 151, 232, 0.5)'
    }
});
