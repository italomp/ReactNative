import { StyleSheet, Text } from "react-native";

export default function HomeTabletLandscape(){
    return(
        <Text style={styles.title}>Home Tablet Landscape</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 36,
        alignSelf: "center"
    }
});