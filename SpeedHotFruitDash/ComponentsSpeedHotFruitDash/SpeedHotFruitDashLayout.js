import { ImageBackground, ScrollView } from 'react-native';

const SpeedHotFruitDashLayout = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/fruitdashbg.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default SpeedHotFruitDashLayout;
