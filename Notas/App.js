import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    // Exemplo de item
    { id: '1', nome: 'Cerveja', preco: 520.35, quantidade: 1, imagem: 'URL_DA_IMAGEM' }
  ]);

  const adicionarItem = (nome, preco, imagem) => {
    const novoItem = {
      id: Date.now().toString(),
      nome,
      preco: parseFloat(preco),
      quantidade: 1,
      imagem
    };
    setItems([...items, novoItem]);
  };

  const removerItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id, quantidade) => {
    setItems(items.map(item => item.id === id ? { ...item, quantidade } : item));
  };

  const calcularTotal = () => {
    return items.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
  };

  const topTresItens = [...items].sort((a, b) => b.preco - a.preco).slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.numeroItens}>{items.length}</Text>
        <View style={styles.topItens}>
          {topTresItens.map(item => (
            <Text key={item.id} style={styles.topItem}>{item.nome} R$ {item.preco.toFixed(2)}</Text>
          ))}
        </View>
        <Text style={styles.total}>TOTAL: R$ {calcularTotal()}</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
              <View style={styles.itemActions}>
                <TouchableOpacity onPress={() => atualizarQuantidade(item.id, item.quantidade + 1)}>
                  <Text style={styles.actionButton}>+</Text>
                </TouchableOpacity>
                <Text>{item.quantidade}</Text>
                <TouchableOpacity onPress={() => atualizarQuantidade(item.id, Math.max(0, item.quantidade - 1))}>
                  <Text style={styles.actionButton}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removerItem(item.id)}>
                  <Text style={styles.actionButton}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7a440',
    padding: 10,
  },
  header: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  numeroItens: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#5a2a27',
  },
  topItens: {
    marginVertical: 10,
  },
  topItem: {
    fontSize: 18,
    color: '#5a2a27',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5a2a27',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2a74b',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPreco: {
    fontSize: 16,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#d35400',
  },
});

export default App;
