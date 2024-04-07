import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

import { Table, Row, Rows } from "react-native-table-component";

import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const MyResults = () => {
  const navigation = useNavigation();

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imcList, setImcList] = useState([]);

  const handleImc = () => {
    if (weight > 0) {
      const imc = parseFloat(weight) / (Number(height) * Number(height));
      const date = new Date(Date.now());

      if (imcList.length > 0) {
        setImcList((old) => [
          ...old,
          [date.toLocaleDateString(), weight, imc.toFixed(2)],
        ]);

        setHeight(0);
        setWeight(0);

        return;
      }

      setImcList([[date.toLocaleDateString(), weight, imc.toFixed(2)]]);

      setHeight(0);
      setWeight(0);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: "#000000d7",
          paddingTop: 40,
          paddingHorizontal: 20,
          height: 80,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="md-arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            MEUS RESULTADOS
          </Text>
        </View>
      </View>

      <View style={styles.form}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Sua altura"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Peso atual"
            keyboardType="numeric"
          />
        </SafeAreaView>
        <Button
          title="Calcular IMC"
          style={styles.btn}
          onPress={() => handleImc()}
        />
      </View>

      {/* table */}
      <View style={styles.table}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={["Data", "Peso", "IMC"]}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={imcList} textStyle={styles.text} />
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    display: "flex",
    marginTop: 10,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginVertical: 15,
    marginHorizontal: 20,
    height: 30,
  },
  table: { padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default MyResults;
