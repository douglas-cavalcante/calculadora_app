import React from "react";
import { TouchableOpacity, StyleSheet,Text } from "react-native";

export default class MyButton extends React.Component {

  constructor(props) {

    super(props);

    let col = 1 ;
    if(props.col) {
      c = parseInt(props.col);
    }

    this.styles = StyleSheet.create({
      area: {
        flex: col,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: "#999999",
        backgroundColor: "#E0E0E0"
      },
      buttonText: {
        fontSize: 18
      },
    });

  }
  render() {
    return (
      <TouchableOpacity style={this.styles.area}>
        <Text style={this.styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
