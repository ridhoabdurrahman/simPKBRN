import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Aplikasi Lebah Hitung Cepat" />
      <View style={styles.container}>
        <TextInput label="Username" placeholder="Type your Username" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your Password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Exit" color="#E4294B" textColor="#f2f2f2" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
