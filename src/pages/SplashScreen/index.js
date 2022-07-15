import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.wrapper}>
      <Logo style={{marginLeft: 31}} />
      <View style={{height: 7}} />
      <Text style={styles.title}>Lebah Hitung Cepat</Text>
      <Text style={styles.subTitle}>PARTAI KEBANGKITAN BANGSA</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#166534',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  subTitle: {
    margin: 0,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
});
