import { Image, Text, StyleSheet } from "react-native"
import { View } from "react-native"


export const PockemonDetails = ({ route }) => {

  const { hp, cp, picture, types } = route.params

  return (
    <>
      <View>
        <Image style={styles.img} source={picture} />
        <Text>hp: {hp}</Text>
        <Text>cp: {cp}</Text>
        <View>
          type:{types.map((item) =>
          (<Text>{item}</Text>
          ))
          }
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
})
