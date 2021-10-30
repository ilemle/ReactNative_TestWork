
import React, { useState } from 'react';

import {
  Text,
  SafeAreaView,
} from 'react-native';

const ListComp= (props)  => {
    const {children}=props;
  return (
    <SafeAreaView style={{flex:1}}>
    
      {children}
    </SafeAreaView>
  );
};


export default ListComp;
