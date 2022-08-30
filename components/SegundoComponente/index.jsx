import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

// Adicione 10 cores diferentes dentro do vetor abaixo
const colors = [
    "#cd84f1", // BRIGHT LILAC
    "#ffcccc", // PRETTY PLEASE
    "#ff4d4d", // LIGHT RED
    "#ffaf40", // MANDARIN SORBET
    "#fffa65", // UNMELLOW YELLOW
    "#32ff7e", // WINTERGREEN
    "#7efff5", // ELECTRIC BLUE
    "#18dcff", // NEON BLUE
    "#7d5fff", // LIGHT SLATE BLUE
    "#4b4b4b", // SHADOWED STEEL

]

// Crie uma função que retorne uma cor aleatória presente no vetor acima (utilizar math.random).

function RandomColor(){
    return colors [Math.floor(Math.random() * (colors.length - 0) + 0)];
}

// console.warn(RandomColor()); --> mostra na tela do celular a referencia

export function SegundoComponente(){
    const [color1, setColor1] = useState(RandomColor()); 
    const [color2, setColor2] = useState(RandomColor()); 
    const [color3, setColor3] = useState(RandomColor()); 

    function changeColors(){
        setColor1(RandomColor())
        setColor2(RandomColor())
        setColor3(RandomColor())
    }

    return (
    <View style={{flex: 1}}>
        <View style={[styles.box, { backgroundColor: color1, flex: 1}]} />
        <View style={[styles.box, { backgroundColor: color2, flex: 2}]} />
        <View style={[styles.box, { backgroundColor: color3, flex: 3}]} />
        <Button style={styles.button} title="Click" onPress={changeColors} />
    </View>    
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: "100%",
    }
})