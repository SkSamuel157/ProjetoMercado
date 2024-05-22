import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const firebaseConfig = {
  apiKey: "Substituir",
  authDomain: "Substituir",
  projectId: "Substituir",
  storageBucket: "Substituir",
  messagingSenderId: "Substituir",
  appId: "Substituir",
  measurementId: "Substituir"
};

const app = initializeApp(firebaseConfig);

const TelaAutenticacao = ({ email, setEmail, senha, setSenha, fazerLogin, setFazerLogin, autenticar, animatedStyle }) => {
  return (
    <Animated.View style={[styles.containerAutenticacao, animatedStyle]}>
      <Text style={styles.titulo}>{fazerLogin ? 'LOGIN' : 'REGISTRAR'}</Text>

      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Endereço de Email"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.botaoLogin} onPress={autenticar}>
        <Text style={styles.textoBotaoLogin}>{fazerLogin ? 'Entrar' : 'Registrar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFazerLogin(!fazerLogin)}>
        <Text style={styles.textoAlternar}>
          {fazerLogin ? 'Precisa de uma conta? Registrar' : 'Já tem uma conta? Entrar'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const TelaAutenticada = ({ usuario, autenticar }) => {
  return (
    <View style={styles.containerAutenticacao}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.textoEmail}>{usuario.email}</Text>
      <TouchableOpacity style={styles.botaoLogin} onPress={autenticar}>
        <Text style={styles.textoBotaoLogin}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [fazerLogin, setFazerLogin] = useState(true);

  const autenticacao = getAuth(app);
  const position = useSharedValue(0);

  useEffect(() => {
    const atualizarInscricao = onAuthStateChanged(autenticacao, (usuario) => {
      setUsuario(usuario);
    });

    return () => atualizarInscricao();
  }, [autenticacao]);

  const autenticar = async () => {
    try {
      if (usuario) {
        await signOut(autenticacao);
      } else {
        if (fazerLogin) {
          await signInWithEmailAndPassword(autenticacao, email, senha);
        } else {
          await createUserWithEmailAndPassword(autenticacao, email, senha);
        }
      }
    } catch (error) {
      console.error('Erro de autenticação:', error.message);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(position.value * width) }]
    };
  });

  useEffect(() => {
    position.value = fazerLogin ? 0 : -1;
  }, [fazerLogin]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground source={require('./img/login.png')} style={styles.backgroundImage}>
          {usuario ? (
            <TelaAutenticada usuario={usuario} autenticar={autenticar} />
          ) : (
            <TelaAutenticacao
              email={email}
              setEmail={setEmail}
              senha={senha}
              setSenha={setSenha}
              fazerLogin={fazerLogin}
              setFazerLogin={setFazerLogin}
              autenticar={autenticar}
              animatedStyle={animatedStyle}
            />
          )}
        </ImageBackground>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  containerAutenticacao: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    elevation: 3,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    marginBottom: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginTop: 16,
    fontSize: 17,
    fontWeight: 'bold',
  },
  input: {
    height: 42,
    borderColor: '#F2A74B',
    backgroundColor: '#F2A74B',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 10,
    width: '100%',
    fontSize: 15,
  },
  botaoLogin: {
    backgroundColor: '#e67e22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 25,
  },
  textoBotaoLogin: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoAlternar: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
  },
  textoEmail: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
