import React, {useState} from 'react';
import ListComp from '../../rep/ListComp';
import Header from '../../rep/Header';

import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import {useSelector} from 'react-redux';
// import View from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';

const HumanList = props => {
  const {navigation} = props;

  const login = useSelector(state => state.login);
  const usersData = useSelector(state => state.users);
  // const isLoading = useSelector(state => state.isLoading);
  // console.log(usersData);
  const [human, setHuman] = useState(usersData);

  // if (isLoading) {
  //   return <Text>LOADING</Text>;
  // }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Header>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderTextStyle}> Список</Text>
          <View style={styles.containerLoginAndIMG}>
            <Text style={styles.HeaderLoginTextStyle}>{login}</Text>
            <Image
              style={styles.imgStyle}
              source={require('./user.png')}></Image>
          </View>
        </View>
      </Header>

      <View style={{flex: 15}}>
        <FlatList
          data={human}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listElemStyle}
              onPress={() => navigation.navigate('HumanInfo', item)}>
              <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.listElementTextStyle}>
                {item.title}
              </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HeaderTextStyle: {
    fontSize: 20,
    color: 'white',
    marginLeft: '5%',
    paddingVertical: 10,
  },
  listElemStyle: {
    width: '90%',
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: '5%',
    paddingLeft: 15,
    overflow: 'scroll',
  },
  listElementTextStyle: {
    color: 'black',
    fontSize: 22,
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
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '5%',
  },
  imgStyle: {
    marginTop: '10%',
  },
});

export default HumanList;
