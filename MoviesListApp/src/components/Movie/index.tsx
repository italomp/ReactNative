import React, {useState} from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MovieDetails from "../MovieDetails";

type MovieProps = {
    data: {
        id: number,
        nome: string,
        sinopse: string,
        foto: string
    }
}

export default function Movie(props: MovieProps){
    let data = props.data;
    let [visibleModal, setVisibleModal] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}> {data.nome}</Text>
                <Image source={{uri: data.foto}} style={styles.poster}/>
                <View style={styles.readMoreBtnArea}>
                    <TouchableOpacity style={styles.readMoreBtn} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.readMoreBtnText}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <MovieDetails data={data} goBack={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    card:{
        margin: 15,
        backgroundColor: "#FFF",
        elevation: 2,
        borderRadius: 3
    },
    poster: {
        height: 250
    },
    title:{
        padding: 15,
        fontSize: 18,
        fontWeight: "bold",
        color: "#838080"
    },
    readMoreBtnArea:{
        alignItems:"flex-end",
        marginTop: -35,
        zIndex: 3
    },
    readMoreBtn: {
        backgroundColor: "#09A6FF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        opacity: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
        
    },
    readMoreBtnText: {
        color: "white"
    }
});