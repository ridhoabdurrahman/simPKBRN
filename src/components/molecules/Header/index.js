import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack, onPress}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
          <View style={styles.backButton}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {padding: 16, marginRight: 16, marginLeft: -10},
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
  },
});
