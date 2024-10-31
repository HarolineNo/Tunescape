import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function TabfourScreen() {
  return (
    <SafeAreaView style={styles.container}>
               <Stack.Navigator>
                <Stack.Screen name="Instructions" component={Instructions} />
                   <Stack.Screen name="QuizPage" component={QuizPage} />
               </Stack.Navigator>
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
