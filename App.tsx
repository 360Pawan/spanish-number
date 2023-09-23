/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Sound from 'react-native-sound';

const sounds = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

function App(): JSX.Element {
  const playSound = (sound: string) => {
    const whoosh = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('FAILED TO LOAD SOUND.');
        return;
      }
    });

    setTimeout(() => whoosh.play(), 100);

    whoosh.release();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.grid}>
        {sounds.map(sound => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => playSound(sound)}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1b262c',
  },

  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },

  grid: {
    flex: 1,
    margin: 5,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  box: {
    height: 100,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    width: '45%',
  },

  text: {
    fontSize: 20,
  },
});

export default App;
