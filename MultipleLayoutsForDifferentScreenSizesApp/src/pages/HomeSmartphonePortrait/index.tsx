import { StyleSheet, Text } from "react-native";

export default function HomeSmartphonePortrait(){
    return(
        <Text style={styles.title}>Home Smartphone Portrait</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: "center"
    }
});