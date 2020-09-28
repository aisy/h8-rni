import React from 'react';
import { View, Text } from 'react-native';

// import Provider
import { ProviderUser } from './context';
import DataUser from './DataUser';

const App = () => {
  return (
    <View>
      {/* Provider context User */}
      <ProviderUser>
        <DataUser />
      </ProviderUser>
    </View>
  )
}

export default App
