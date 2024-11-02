import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const genres = [
    { title: '  Focus', image: require('../../assets/images/nature.jpg') }, 
    { title: '  Relax', image: require('../../assets/images/nature.jpg') },
    { title: '  Meditate', image: require('../../assets/images/nature.jpg') },
    { title: '  Motivation', image: require('../../assets/images/nature.jpg') }
];

export default function TabThreeScreen() {    

  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#151452', '#3533cd']} start={{x:0, y:1}} end={{x:1, y:1}} style={styles.background}>
            <ScrollView>
                <Text style={styles.titleText}>Genres</Text>
                {genres.map((genre) => (
                    <TouchableOpacity key={genre.title} style={styles.card}>
                        <ImageBackground style={styles.cardImage} source={genre.image} resizeMode='cover'>
                            <LinearGradient colors={['rgba(0, 0, 150, 0.4)', 'transparent']} style={styles.overlayView} />
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
        fontSize: 35,
        textAlign: 'left',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
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
