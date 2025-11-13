import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import SpeedHotFruitDashLoader from './SpeedHotFruitDash/ComponentsSpeedHotFruitDash/SpeedHotFruitDashLoader';
import SpeedHotFruitDashStack from './SpeedHotFruitDash/NavigationSpeedHotFruitDash/SpeedHotFruitDashStack';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <SpeedHotFruitDashLoader /> : <SpeedHotFruitDashStack />}
    </NavigationContainer>
  );
};

export default App;
