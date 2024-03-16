import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { FitnessItems } from '../../Context';

import { useNavigation } from '@react-navigation/native';

const WorkoutsScreen = () => {
  const navigation = useNavigation();
  const { calories, minutes, workout, } = useContext(FitnessItems);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ marginTop: 20 }}>
      <View style={{ backgroundColor: "#000000d7", paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 50}}>
        <TouchableOpacity  style={{marginRight:20}} onPress={() => navigation.navigate("Home")}>
            <Ionicons name="md-arrow-back" size={24} color="white" />
          </TouchableOpacity>  
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>TREINOS</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50 }}>
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text>EXERCÍCIOS</Text>
          </View>
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTOS</Text>
          </View>
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  )
}

export default WorkoutsScreen

const styles = StyleSheet.create({
  shadowCards: {
    backgroundColor: "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});