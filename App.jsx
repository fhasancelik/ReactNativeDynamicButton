import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton, {buttonTypes} from './CustomButton';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <CustomButton
        buttonType={buttonTypes.LIGHT_SMALL}
        title={'Light-Medium'}
      />
          <CustomButton
        buttonType={buttonTypes.PRIMARY_SMALL}
        title={'Primary-Medium'}
      />

<CustomButton
        buttonType={buttonTypes.OUTLINE_SMALL}
        title={'Outline-Medium'}
      />
      <CustomButton
        buttonType={buttonTypes.LIGHT_LARGE}
        title={'Light-Large'}
      />
  
      <CustomButton
        buttonType={buttonTypes.PRIMARY_LARGE}
        title={'Primary-Large'}
      />
  
      <CustomButton
        buttonType={buttonTypes.OUTLINE_LARGE}
        title={'Outline-Large'}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
