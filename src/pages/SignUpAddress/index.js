import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Full Data"
        subTitle="Make sure it's Valid!"
        onBack={() => {}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput label="NIK" placeholder="Type your NIK" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your Address" />
        <Gap height={16} />
        <TextInput label="Phone No." placeholder="Type your Phone Number" />
        <Gap height={16} />
        <Select labelTitle="District" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8d92a3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
    textAlign: 'center',
  },
  textPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
