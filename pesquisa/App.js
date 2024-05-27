import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./img/logo.png')} style={styles.logo} />
      <View style={styles.separator} />
      <View style={styles.productContainer}>
        <Image source={require('./img/Pao.png')} style={styles.productImage} />
        <View style={styles.separator} />
        <Text style={styles.productName}>Pão de forma - Panco Premium</Text>
        <Text style={styles.shippingInfo}>Envio Nacional</Text>
        <Text style={styles.oldPrice}>(R$ 105,99)</Text>
        <Text style={styles.newPrice}>R$ 13,99</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D9BC9A',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 75,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  separator: {
    height: 4,
    width: '100%',
    backgroundColor: '#591902', // Cor laranja
    marginBottom: 16,
  },
  productContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#F2A74B', // Cor de fundo do contêiner do produto
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  shippingInfo: {
    color: 'green',
    marginBottom: 8,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#231240',
    marginBottom: 8,
  },
  newPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#231240',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#591902',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
