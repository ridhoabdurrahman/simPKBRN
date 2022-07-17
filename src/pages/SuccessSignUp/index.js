import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.subTitle}>Your account has been created</Text>
      <Gap height={150} />
      <IlSuccess />
      <Gap height={150} />
      <View style={styles.buttonContainer}>
        <Button text="Continue" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  title: {
    color: '#020202',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
  },
  subTitle: {color: '#020202', fontFamily: 'Poppins-Regular', fontSize: 16},
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {width: '100%', paddingHorizontal: 80},
});
