import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import pic from './assets/logo.webp';

export default function ChatGPTHomepage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={pic} 
          style={styles.icon}
        />
        <Text style={styles.title}>ChatGPT</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Welcome to ChatGPT</Text>
        <Text style={styles.description}>
          Start a conversation with our chatbot and get instant answers to your questions.
        </Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#24469C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});