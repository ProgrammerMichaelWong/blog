import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default ({ route, navigation }) => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      initialValues={{ title: '', content: '' }}
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});
