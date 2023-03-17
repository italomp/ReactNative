import { StyleSheet,Text } from "react-native";

export default function HomeSmartphoneLandscape(){
    return(
        <Text style={styles.title}>Home Smartphone Landscape</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 28,
        alignSelf: "center"
    }
});