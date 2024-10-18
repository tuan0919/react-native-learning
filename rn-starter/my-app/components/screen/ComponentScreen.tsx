import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen: React.FC = () => {
    return <Text style={styles.textStyle}>This is ComponentsScreen</Text>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;