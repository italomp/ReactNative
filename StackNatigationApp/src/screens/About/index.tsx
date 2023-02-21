import React from "react";
import { Text, View, Button } from "react-native";

type NavigatgionProps = {
    navigation: any;
    route: any;
}

export default function About(props: NavigatgionProps){
    let receivedParam = props.route.params;
    return(
        <View>
            <Text>About</Text>
            <Text>{receivedParam.text}</Text>
            <Button title="Go to Home" onPress={() => props.navigation.goBack()}/>
        </View>
    );
}