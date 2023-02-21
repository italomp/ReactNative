import React from "react";
import { Text, View, Button } from "react-native";

type NavigatgionProps = {
    navigation: any;
}

export default function About(props: NavigatgionProps){
    return(
        <View>
            <Text>About</Text>
            <Button title="Go to Home" onPress={() => props.navigation.navigate("Home")}/>
        </View>
    );
}