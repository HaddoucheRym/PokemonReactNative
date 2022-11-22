import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import { AffichePockemon } from "../components/AffichePockemon";
import pockiModel from "../models/pokemons";


export const PockemonList = ({navigation}) => {

  const [pockis, setPockis] = useState([])

  useEffect(() => {
    setPockis(pockiModel)
  }, [])

  return (
    <>
      <View style={styles.tout}>
        <Text style={styles.h}>pokemon List</Text>
        {pockis.map((item, index) => <AffichePockemon navigation={navigation} key={index} pocki={item} />)}
       
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  tout: {
    alignItems: 'center',
    backgroundColor: 'white'
  },
  h: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
  }
})
