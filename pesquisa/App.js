import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoPlaceholder} />
      </View>
      <View style={styles.productContainer}>
        <Image source={require('')} style={styles.productImage}></Image>
        <Text style={styles.productName}>Pão de forma - Panco Premium</Text>
        <Text style={styles.productShipping}>Envio Nacional</Text>
        <Text style={styles.oldPrice}>R$ 105,99</Text>
        <Text style={styles.newPrice}>R$ 13,99</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D9BC9A',
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  logoPlaceholder: {
    width: '100%',
    height: 50,
    backgroundColor: '#e07a5f',
    marginBottom: 16,
  },
  productContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 150,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#4A4A4A',
  },
  productShipping: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginBottom: 8,
  },
  newPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e07a5f',
    marginBottom: 16,
  },
});

export default ProductPage;
