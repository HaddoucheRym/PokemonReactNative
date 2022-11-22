import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {

    const changePage = () => {
        navigation.navigate("PockemonList")
    }

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.h}>Welcome to the Pokemon APP</Text>
            <Button style={styles.bouton} title="Page Pokemons" onPress={changePage} />
        </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: 'center', 
    },
    h:  {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bouton: {
        width: 100,
        
    }
})

export default Home;