// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Custom Text

import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Mytext = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#111825',
    fontSize: 18,
    margin: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Mytext;
