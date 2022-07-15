import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-community/picker';

const Select = ({labelTitle}) => {
  return (
    <View>
      <Text style={styles.label}>{labelTitle}</Text>
      <View style={styles.select}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Select your District" />
          <Picker.Item label="Kecamatan 1" value="1" />
          <Picker.Item label="Kecamatan 2" value="2" />
          <Picker.Item label="Kecamatan 3" value="3" />
          <Picker.Item label="Kecamatan 4" value="4" />
          <Picker.Item label="Kecamatan 5" value="5" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
  },
  select: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 1,
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
  },
});
