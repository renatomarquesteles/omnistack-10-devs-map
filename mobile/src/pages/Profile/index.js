import React from 'react';
import { Web } from './styles';

export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return <Web source={{ uri: `https://github.com/${githubUsername}` }} />;
}
