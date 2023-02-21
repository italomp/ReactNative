import React from "react";
import { Button, Text, View } from "react-native";

type NavigatgionProps = {
    navigation: any;
}

export default function Home(props: NavigatgionProps){
    let params = {
        text: "Texto/parâmetro enviado da HOME"
    }
    return(
        <View>
            <Text>Home</Text>
            <Button title="Go to About" onPress={() => props.navigation.navigate("About", params)}/>
        </View>
    );
}