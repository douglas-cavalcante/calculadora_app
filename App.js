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
        this.setState({ result: 0 });
      } else if (buttonLabel === "=") {
        let result = eval(this.state.result);
        this.setState({ result });
      } else if (buttonLabel === "X") {
        let result = this.state.result.substring(0, (this.state.result.length - 1));
        this.setState({ result });
      } else {
        if (this.state.result == 0) {
          this.setState({ result: buttonLabel });
        } else {
          this.setState({ result: this.state.result += buttonLabel });
        }
      }
    } catch (error) {
      alert("Por favor, Verifique sua expressão matemática :)");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.row}>
          <MyButton col="2" text="C" bgColor="#cccccc" onPress={() => this.addDigit("C")} />
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
    fontSize: 50,
    flex: 1,
    textAlign: "right"
  }
});
