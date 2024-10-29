import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function QuestionsPage({ question, option }) {
    return (
        <View>
            <Text>{question}</Text>
            {option.map((option, index) => (
                <TouchableOpacity key={index}>
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}