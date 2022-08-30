import { View, StyleSheet, Dimensions, StatusBar } from "react-native";

const screenHeight = Dimensions.get("screen").height;
const statusBarHeight = 70;

export function Modal({ children, visible }){
    return (
        <View style={[styles.backgroundContainer, { display: visible ? "flex" : "none"}]}>
            <View style={styles.content}>
                { children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "black",
        marginTop: statusBarHeight,
        width: "100%",
        height: screenHeight - statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor: "#fff",
        width: "70%",
        minHeight: 400,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    }
});