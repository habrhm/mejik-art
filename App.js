import React from 'react';
import StorybookUI from './storybook';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import TestScreen from './src/screens/TestScreen';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
      <StorybookUI/>
  </ApplicationProvider>
);

export default App;










