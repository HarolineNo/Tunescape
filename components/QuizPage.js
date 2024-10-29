import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import data from './Questions'; 
import ProgressBar from './ProgressBar'; // Assuming you have this component

export default function QuestionsPage({ navigation }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const allQuestions = data;
    const currentQuestion = allQuestions[currentQuestionIndex];

    // Progress calculation for progress bar
    const progress = (currentQuestionIndex + 1) / allQuestions.length;

    const handleOptionPress = () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Navigate to the result screen or summary if needed
            console.log("Quiz Completed");
        }
    };

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} />
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            <View style={styles.optionsContainer}>
                {currentQuestion.options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionButton}
                        onPress={handleOptionPress}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    questionText: {
        fontSize: 24,
        marginVertical: 20,
    },
    optionsContainer: {
        marginTop: 20,
    },
    optionButton: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 18,
    },
});
