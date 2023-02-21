import React from "react";
import { Button, Text, View } from "react-native";

type NavigatgionProps = {
    navigation: any;
}

export default function Home(props: NavigatgionProps){
    return(
        <View>
            <Text>Home</Text>
            <Button title="Go to About" onPress={() => props.navigation.navigate("About")}/>
        </View>
    );
}