import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

export default ({ route, navigation }) => {
  const { state, addBlogPost } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    marginHorizontal: 5,
    padding: 5,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});
