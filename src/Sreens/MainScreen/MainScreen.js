import React from 'react';
import Header from '../../rep/Header';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  // KeyboardAwareScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const MainScreen = ({navigation}) => {
  // const [login,onChangeLogin]=useState('');
  const login = useSelector(state => state.login);
  // const inputLoginValue = useSelector(state => state.inputLoginValue);
  const dispatch = useDispatch();

  const addLogin = login => {
    dispatch({type: 'SET_LOGIN', payload: login});
  };

  dispatch({type: 'GET_USERS'});

  const changeScene = () => {
    if (login.length === 0) {
      alert('Вы не ввели логин');
      return;
    }
    
    navigation.navigate('HumanList');
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      // contentContainerStyle={styles.container}
      scrollEnabled={false}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="red" />
        <Header>
          <Text style={styles.HeaderTextStyle}>Вход в личный кабинет</Text>
        </Header>

        <View style={(styles.sectionContainer, {flex: 15})}>
          <Text style={styles.sectionTitle}>Вход</Text>
          <Text style={styles.sectionDescription}>
            Согласно классификации М.Вебера, форма политического сознания
            предсказуема. Полическая психология, согласно традиционным
            представлениям, символизирует системный культ личности.
          </Text>

          <View style={styles.sectionInput}>
            <Text style={styles.sectionInputText}>Логин</Text>
            <TextInput
              value={login}
              style={styles.inputStyle}
              onChangeText={text => addLogin(text)}
              placeholder="Введите логин"></TextInput>

            <Text style={styles.sectionInputText}>Пароль</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Введите пароль"></TextInput>
          </View>

          <TouchableOpacity onPress={changeScene} style={styles.ButtonStyle}>
            <Text style={styles.ButtonTextStyle}>Войти</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  HeaderTextStyle: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  sectionContainer: {
    display: 'flex',
    marginTop: 32,
    paddingHorizontal: '10%',
  },
  sectionTitle: {
    fontSize: 48,
    color: '#ad1515',
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionDescription: {
    marginTop: 26,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)',
  },
  sectionInput: {
    marginTop: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.7)',
    width: 330,
    textAlign: 'left',
    padding: 2,
  },
  sectionInputText: {
    marginTop: 20,
  },
  ButtonStyle: {
    margin: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ad1515',
    borderRadius: 7,
    width: 270,
    height: 45,
  },
  ButtonTextStyle: {
    fontSize: 18,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 8,
  },
});

export default MainScreen;
