import { SafeAreaView, StyleSheet, ImageBackground, View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';


export default function TabFiveScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.signinContainer}>
            <Text style={styles.titleText}>Tunescape</Text>
            <TouchableOpacity style={styles.activeBtn}>
                <Text style={styles.btnText}>Signup</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TextInput style={styles.inputField}></TextInput>
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
        backgroundColor: '#2e2cb2',
        height: '60%',
        width: '80%',
        borderRadius: 20
    },
    titleText: {
        color: 'white',
        padding: 20,
        fontSize: 40,
        textAlign: 'center',
    },
    activeBtn: {
        borderRadius: 10,
        width: '25%',
        backgroundColor: 'blue',
    },
    btn: {
        borderRadius: 10,
        width: '25%',
        backgroundColor: '#c5d6ff',
    },
    btnText: {
        fontSize: 24,
        padding: 10,
        color: 'white',
        textAlign: 'center',
    },
    inputField: {
        backgroundColor: '#7797e8',
        height: '10%',
        width: '70%'
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
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
