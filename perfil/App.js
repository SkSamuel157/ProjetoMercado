import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoPlaceholder} />
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarPlaceholder} />
        </View>
        <Text style={styles.userName}>Nome do Usuário</Text>
        <Text style={styles.userId}>ID 123456789</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconPlaceholder} />
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconPlaceholder} />
          <Text style={styles.buttonText}>Últimas Compras</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconPlaceholder} />
          <Text style={styles.buttonText}>Informações Pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.iconPlaceholder} />
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9BC9A',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#A0522D', // Cor de placeholder para o logo
    marginBottom: 10,

  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: '80%',
    height: '80%',
    backgroundColor: '#A9A9A9', // Cor de placeholder para o avatar
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#231240',
  },
  userId: {
    fontSize: 14,
    color: '#231240',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    width: '45%',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#A9A9A9', // Cor de placeholder para os ícones
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#231240',
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
