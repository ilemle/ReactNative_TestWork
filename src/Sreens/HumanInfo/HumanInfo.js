import React, {useState} from 'react';
import Header from '../../rep/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const HumanInfo = props => {
  const {route, navigation} = props;

  const dispatch=useDispatch();
  const login = useSelector(state => state.login);

  const goBackPage = () => {
    navigation.goBack();
  };

  const unLogin = () => {
    dispatch({type:'SET_LOGIN',payload:''})
    dispatch({type:'CLEAR_INPUT_LOGIN_VALUE'})
    
    navigation.navigate('MainScreen');
    
    
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTextStyle}> График</Text>
          <View style={styles.containerLoginAndIMG}>
            <Text style={styles.HeaderLoginTextStyle}>{login}</Text>
            <Image
              style={styles.imgStyle}
              source={require('../HumanList/user.png')}></Image>
          </View>
        </View>
      </Header>

      <View style={styles.mainContainer}>
        <View style={styles.containerText}>
          <ScrollView>
            <View style={styles.containerText}>
              <Text style={styles.containerTextHumanName}>
                {route.params.title}
              </Text>
              <Text style={styles.containerTextData}>{route.params.description}</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.containterButton}>
          <TouchableOpacity
            style={styles.containerLeftButton}
            onPress={goBackPage}>
            <Text style={styles.leftButtonText}>Назад</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerRightButton}
            onPress={unLogin}>
            <Text style={styles.rightButtonText}>Выйти из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 15,
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '5%',
  },
  imgStyle: {
    marginTop: '10%',
  },
  containerLoginAndIMG: {
    flexDirection: 'row',
  },
  HeaderLoginTextStyle: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'right',
  },
  HeaderTextStyle: {
    fontSize: 20,
    color: 'white',
    marginLeft: '5%',
    paddingVertical: 10,
  },

  containerText: {
    flex: 14,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
  },
  containerTextHumanName: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  containerTextData: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.6)',
    marginTop: 20,
    textAlign: 'left',
  },

  containterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  containerLeftButton: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'red',
  },
  containerRightButton: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
  },
  leftButtonText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 12,
  },
  rightButtonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 12,
  },

});

export default HumanInfo;
