import { StyleSheet, Text,  View } from 'react-native';

export default function Sandbox() {
    return (
        // this page is for sample flexbox attempt
        <View style={styles.container}>
            <Text style={styles.boxone}>one</Text>
            <Text style={styles.boxtwo}>two</Text>
            <Text style={styles.boxthree}>three</Text>
            <Text style={styles.boxfour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around", 
        alignItems:"flex-end",
        paddingTop: 40,
        backgroundColor: "#ddd"
    },
    boxone:{
        flex:1,
        backgroundColor: "violet",
        padding: 10,
    },
    boxtwo:{
        flex:1,
        backgroundColor: "gold",
        padding: 20,
    },
    boxthree:{
        flex:1,
        backgroundColor: "red",
        padding: 30,
    },
    boxfour:{
        flex:1,
        backgroundColor: "coral",
        padding: 10,
    }
})