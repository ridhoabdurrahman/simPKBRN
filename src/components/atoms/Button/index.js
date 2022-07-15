import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({text, color = '#025330', textColor = '#ffffff'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
