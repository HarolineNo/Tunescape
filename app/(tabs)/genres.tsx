import { nature } from '@/assets/images/nature.jpg';
import { SafeAreaView, StyleSheet, Image, Platform, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabThreeScreen() {
  return (
    <SafeAreaView>
        <ScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Select a Category</ThemedText>
            </ThemedView>
            <ThemedText>This app includes example code to help you get started.</ThemedText>
            <TouchableOpacity style={styles.card}>
                <Image style={styles.cardImage} source={require('@/assets/images/nature.jpg')}/>
                <Text style={styles.cardText}>Card Title</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        fontSize: 30
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginLeft: '2%',
        width: '96%',
    },
    cardImage: {
        resizeMode: 'cover',
        height: 200,
        width: '100%',
    },
});
