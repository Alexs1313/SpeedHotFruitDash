import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SpeedHotFruitDashLayout from './SpeedHotFruitDashLayout';

const SpeedHotFruitDashLoader = () => {
  return (
    <SpeedHotFruitDashLayout>
      <View style={styles.fruitdashloaderwrap}>
        <Image
          source={require('../../assets/images/fruitdashload.png')}
          style={{ bottom: 60 }}
        />
      </View>
    </SpeedHotFruitDashLayout>
  );
};

const styles = StyleSheet.create({
  fruitdashloaderwrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 770,
  },
});

export default SpeedHotFruitDashLoader;
