
import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Header= (props)  => {
  const {children}= props;
  return (
    <SafeAreaView style={styles.header}>
        <View>
          {children}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width:'100%',
    flex:1,
    // height:50,
    backgroundColor:'red',
  },
});

export default Header;
