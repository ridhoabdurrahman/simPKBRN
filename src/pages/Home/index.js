import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Lebah Hitung Cepat</Text>
          <Text style={styles.desc}>Aplikasi Pemenangan Calon Legislatif</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <Text>Home Page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },
  desc: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
});
