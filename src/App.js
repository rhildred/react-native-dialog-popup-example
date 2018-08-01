import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Show Dialog" onPress={()=>this.popupDialog.show()}></Button>
        <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
