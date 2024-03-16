import {
  Text,
  View,
  VirtualizedList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';


const WorkoutsScreen = () => {

  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      title: 'Evite dietas milagrosas em que há uma grande eliminação de peso em um curto período de tempo.',
    },
    {
      id: 2,
      title: 'Não faça uma alimentação baseada em um único tipo de alimento ou nutriente.',
    },
    {
      id: 3,
      title: 'Pequenos lanches entre as refeições principais irão evitar a vontade de devorar o primeiro prato que encontrar pela frente.',
    },
    {
      id: 4,
      title: 'Frutas e iogurtes são excelentes lanches.',
    },
    {
      id: 5,
      title: 'Comece sempre a refeição com um caprichado prato de saladas.',
    },
    {
      id: 6,
      title: 'Macarrão é permitido, mas cuidado com o molho, e prefira os integrais (molho branco, quatro queijos, bolonhesa são muito mais calóricos quando comparados com o ao sugo. Portanto, não abuse!)',
    },
    {
      id: 7,
      title: 'Evite beber refrigerantes, mesmo os light ou diet.',
    },
    {
      id: 8,
      title: 'Evite água gaseificada. Bebidas com gás dilatam o estômago dando uma falsa sensação de saciedade.',
    },
    {
      id: 9,
      title: 'Bebidas isotônicas devem ser evitadas. São calóricas e, para não atletas, a água ainda é o melhor hidratante.',
    },
    {
      id: 10,
      title: 'Prefira sucos naturais.',
    },
    {
      id: 11,
      title: 'Beba, no máximo, 4 xícaras pequenas de café por dia.',
    },
    {
      id: 12,
      title: 'Ingira bastante água durante o dia. No mínimo, 1,5 litro ou 8 copos.',
    },
    {
      id: 13,
      title: 'Leve sempre uma barrinha de cereais na bolsa. Quando bater aquela vontade de comer alguma coisa, você já sabe a que recorrer.',
    },
    {
      id: 14,
      title: 'Ingira legumes todos os dias.',
    },
    {
      id: 15,
      title: 'Ingira carnes menos calóricas como peixe, frango (peito), peru, patinho, contrafilé.',
    },
    {
      id: 16,
      title: 'Retire a gordura visível das carnes, como por exemplo, a da picanha.',
    },
    {
      id: 17,
      title: 'Evite alimentos fritos. Dê preferência aos grelhados ou cozidos.',
    },
    {
      id: 18,
      title: 'Embutidos (mortadela, presunto, salame) devem ser evitados.',
    },
    {
      id: 19,
      title: 'Enlatados são ricos em sódio; por isso, prefira os alimentos naturais.',
    },
    {
      id: 20,
      title: 'Manteiga, creme de leite, chantilly, massa podre são ricos em calorias e colesterol. Evite-os.',
    },
    {
      id: 21,
      title: 'Dê preferência aos queijos brancos como o de minas, frescal, ricota e cottage.',
    },
    {
      id: 22,
      title: 'Ingira alimentos ricos em fibras como legumes, verduras e frutas.',
    },
    {
      id: 23,
      title: 'Bebidas alcoólicas são calóricas. Consuma esporadicamente e em pequena quantidade.',
    },
    {
      id: 24,
      title: 'Evite os fast-food. Os alimentos servidos são normalmente ricos em gorduras.',
    },
    {
      id: 25,
      title: 'Em restaurantes por quilo, passe primeiro por todas as opções antes de escolher os alimentos. Isso evitará exageros.',
    },
    {
      id: 26,
      title: 'Evite sorvetes de massa. Opte pelo picolé de fruta.',
    },
    {
      id: 27,
      title: 'Nunca vá ao supermercado com fome. Vá sempre após uma refeição. Isso evitará pegar balas, chocolates e salgadinhos.',
    },
    {
      id: 28,
      title: 'Compare os rótulos dos alimentos e verifique se os light e diet são menos calóricos. Nem sempre isso é verdade.',
    },
    {
      id: 29,
      title: 'Nunca acumule a fome. Por isso deixe na geladeira legumes picados (cenoura, pepino, salsão) e gelatina diet. Eles não prejudicarão o seu emagrecimento.',
    },
    {
      id: 30,
      title: 'Movimente-se!! Você não precisa ir à academia! Caminhar 3 vezes por semana pelo bairro, por 40 minutos cada sessão, irá ajudá-lo a ter mais saúde!',
    },
    {
      id: 31,
      title: '',
    }
  ];

  const getItem = (_data, index) => {
    if(index > 31) return
    return DATA.find((_,i)=> index === i)
  };
  
  const getItemCount = _data => 30;
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

  return (
    <View style={{ marginTop: 20 }}>
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
            justifyContent: "flex-start",
            marginBottom: 50,
          }}
        >
          <TouchableOpacity  style={{marginRight:20}} onPress={() => navigation.navigate("Home")}>
            <Ionicons name="md-arrow-back" size={24} color="white" />
          </TouchableOpacity>  
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          DICAS DE ALIMENTAÇÃO
          </Text>
        </View>
        </View>

      <VirtualizedList
        initialNumToRender={30}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#ffcf',
  },
  title: {
    fontSize: 24,
  },
});

export default WorkoutsScreen;