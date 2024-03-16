import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FitnessItems } from "../../Context";

import { useNavigation } from '@react-navigation/native';


const WorkoutsScreen = () => {
  const { calories, minutes, workout } = useContext(FitnessItems);

  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: "#000000d7",
          paddingTop: 40,
          paddingHorizontal: 20,
          height: 160,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            HOME
          </Text>
          
        </View>
      
      </View>

    
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeWorkouts")}
        style={{marginTop: 20, marginHorizontal: 20, marginBottom: 20}}
      >
        <View>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 12 }}
            source={require('../../assets/clube-de-saude.jpg')}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            TREINOS
          </Text>
         
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeWorkouts")}
        style={{marginTop: 20, marginHorizontal: 20, marginBottom: 20}}
      >
        <View>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 12 }}
            source={require('../../assets/alimentacao.jpg')}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            DICAS DE ALIMENTAÇÃO
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeWorkouts")}
        style={{marginTop: 20, marginHorizontal: 20, marginBottom: 20}}
      >
        <View>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 12 }}
            source={require('../../assets/Bem-estar-capa.jpg')}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            MEUS RESULTADOS
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WorkoutsScreen;

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
    elevation: 5,
  },
});
