import { Text, View, StyleSheet, Image, Button } from "react-native"
import { PockemonDetails } from "./PockemonDetails";


export const AffichePockemon = ({ navigation, pocki }) => {

  return (
    <>
      <View style={styles.affiche}>
        <Image source={pocki.picture} style={styles.img} />
        <Text style={styles.h}> {pocki.name}</Text>
        <Button title="Detail" onPress={() => {
          navigation.navigate('PockemonDetails', {
            hp: pocki.hp,
            cp: pocki.cp,
            picture: pocki.picture,
            types: pocki.types
          })
        }} />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  affiche: {
    flex: 1,
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 200,
    justifyContent: 'center',
    alignItems: "center",
    alignContent: "center",
    marginVertical: 10,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,


  },
  img: {
    width: 100,
    height: 100,
  },
  h: {
    fontWeight: 'bold',
  }
})
