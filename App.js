import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MyButton from "./MyButton";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    }
  }

  addDigit = (buttonLabel) => {
    try {
      if (buttonLabel === "C") {
        //Reseta o valor da calculadora
        this.setState({ result: "0" });
      } else if (buttonLabel === "=") {
        //Avalia a expressão e realiza um cálculo 
        let result = eval(this.state.result).toString();
        this.setState({ result });
      } else if (buttonLabel === "X") {
        let result = this.state.result.substring(0, (this.state.result.length - 1));
       
        this.setState({ result: result.toString() });
      } else {
        if (this.state.result === "0") {
          //Substitui o valor 0 pelo dígito escolhido
          this.setState({ result: buttonLabel });
        } else {
          //concatena os dígitos
          this.setState({ result: this.state.result += buttonLabel });
        }
      }
    } catch (error) {
      alert("Por favor , Verifique sua expressão matemática :)");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.row}>
          <MyButton col="2" text="Clear" bgColor="#cccccc" onPress={() => this.addDigit("C")} />
          <MyButton text="X" bgColor="#cccccc" bold="bold" onPress={() => this.addDigit("X")} />
          <MyButton text="/" bgColor="#87CEEB" onPress={() => this.addDigit("/")} />
        </View>
        <View style={styles.row}>
          <MyButton text="7" onPress={() => this.addDigit("7")} />
          <MyButton text="8" onPress={() => this.addDigit("8")} />
          <MyButton text="9" onPress={() => this.addDigit("9")} />
          <MyButton text="*" bgColor="#87CEEB" onPress={() => this.addDigit("*")} />
        </View>
        <View style={styles.row}>
          <MyButton text="4" onPress={() => this.addDigit("4")} />
          <MyButton text="5" onPress={() => this.addDigit("5")} />
          <MyButton text="6" onPress={() => this.addDigit("6")} />
          <MyButton text="-" onPress={() => this.addDigit("-")} bgColor="#87CEEB" />
        </View>
        <View style={styles.row}>
          <MyButton text="1" onPress={() => this.addDigit("1")} />
          <MyButton text="2" onPress={() => this.addDigit("2")} />
          <MyButton text="3" onPress={() => this.addDigit("3")} />
          <MyButton text="+" bgColor="#87CEEB" onPress={() => this.addDigit("+")} />
        </View>
        <View style={styles.row}>
          <MyButton col="2" text="0" onPress={() => this.addDigit("0")} />
          <MyButton text="." onPress={() => this.addDigit(".")} />
          <MyButton text="=" bgColor="#87CEEB" onPress={() => this.addDigit("=")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  result: {
    backgroundColor: "transparent",
    color: "#000000",
    fontSize: 40,
    flex: 1,
    textAlign: "right"
  }
});
