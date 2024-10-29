import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import data from "./Questions"; 

export default ProgressBar = ({ progess }) => {
    const allQuestions = data;

    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ["0%", "100%"],
    });
    
    return (
        <View>
            <Animated.View
                style={[
                {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: "#EDA276" + "90",
                },
                {
                    width: progressAnim,
                },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    progressBarContainer: {
        width: "80%",
        height: 5,
        borderRadius: 5,
        backgroundColor: "#00000020",
        marginBottom: 10,
    },
});