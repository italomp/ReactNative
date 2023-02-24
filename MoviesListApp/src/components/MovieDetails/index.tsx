import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MovieProps = {
    data: {
        id: number,
        nome: string,
        sinopse: string,
        foto: string
    },
    goBack: Function;
}

export default function MovieDetails(props: MovieProps){
    let data = props.data;
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.goBackBtn} onPress={() => props.goBack()}>
                    <Text style={styles.goBackBtnText}>Voltar</Text>
                </TouchableOpacity>
                
                <Text style={styles.title}>{data.nome}</Text>
                <Text style={styles.overviewLabel}>Sinopse:</Text>
                <Text style={styles.overview}>{data.sinopse}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    modalContainer: {
        height: "80%",
        backgroundColor: "#121212",
        borderRadius: 5,
        marginBottom: 10
    },
    goBackBtn: {
        backgroundColor: "#E52246",
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    goBackBtnText: {
        color: "#FFF", 
        fontSize: 16
    },
    title:{
        color: "#FFF",
        fontSize: 24,
        padding: 10,
        fontWeight: "bold"
    },
    overviewLabel:{
        color:"#FFF",
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10
    },
    overview:{
        color:"#FFF",
        marginHorizontal: 10
    }

});