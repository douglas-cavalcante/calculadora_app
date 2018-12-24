import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class MyButton extends React.Component {

  constructor(props) {

    super(props);

    let col = 1;
    if (props.col) {
      col = parseInt(props.col);
    }

    this.styles = StyleSheet.create({
      area: {
        flex: col,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#999999",
        backgroundColor: props.bgColor ? props.bgColor : "#E0E0E0"
      },
      buttonText: {
        fontSize: 18,
        fontWeight: props.bold ? props.bold : "normal"
      },
    });

  }

  render() {
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
