import { StyleSheet, Text } from "react-native";

export default function HomeTabletPortrait(){
    return(
        <Text style={styles.title}>Home Tablet Portrait</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 36,
        alignSelf: "center"
    }
});