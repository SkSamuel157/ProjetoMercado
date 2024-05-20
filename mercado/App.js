import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '='];

  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const firstNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString());
        return;
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString());
        return;
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (buttonPressed === '+' || buttonPressed === "-" || buttonPressed === "*" || buttonPressed === "/") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)));
        return;
      case 'AC':
        setLastNumber("");
        setCurrentNumber("");
        return;
      case '=':
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
      case '+/-':
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }
  
  const styles = StyleSheet.create({
    results: {
      backgroundColor: "#F2A74B", // cor de fundo modificada
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      marginBottom: 10,
    },
    resultText: {
      color: "#591902", // cor do texto modificada
      margin: 20,
      fontSize: 70,
    },
    historyText: {
      color: "#591902", // cor do texto do histórico modificada
      fontSize: 25,
      marginRight: 10,
      alignSelf: 'flex-end',
      
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: "#D9BC9A",
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 95 ,
      minHeight: 80,
      flex: 2,
      backgroundColor: "#F2994A", // cor de fundo dos botões modificada
      borderRadius: 50,
    },
    textButton: {
      color: "#FFFFFF", // cor do texto dos botões modificada
      fontSize: 30,
    },
    home:{
      backgroundColor: "#D9BC9A",
    },
  });
  
  return (
    <View style={styles.home}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, { backgroundColor: '#F2994A' }]}>
              <Text style={[styles.textButton, { color: "white", fontSize: 50 }]}>{button}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button,
            { backgroundColor: typeof (button) === 'number' ? '#A95F34' : '#591902' }]}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
