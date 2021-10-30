
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

const Header2= (props)  => {
  const {children}= props;
  return (
    <SafeAreaView style={styles.header}>
        <View style={styles.viewHeaderStyle}>
          <Text style={styles.HeaderTextStyle}>{children}</Text>
          <View style={styles.viewHeaderStyle}>
            <Text style={styles.HeaderTextStyleLogin}>
              {route.params.login}
            </Text>
            <Image style={styles.imageStyle} source={require('./user32.png')}></Image>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:50,
    backgroundColor:'red',
  },
  HeaderTextStyle: {
    width: '50%',
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  HeaderTextStyleLogin: {
    width: '50%',
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'right',
  },
  viewHeaderStyle: {
    flexDirection: 'row',
  },
  imageStyle:{
    marginTop:10,
  },
});

export default Header2;
