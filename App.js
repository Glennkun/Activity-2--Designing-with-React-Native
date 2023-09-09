import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import pic from './assets/pic.jpg';


import { Animated } from 'react-native';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
      isSidebarOpen: false,
    };
  }

  handleSendMessage = () => {
    if (this.state.newMessage !== '') {
      const newMessages = [...this.state.messages, this.state.newMessage];
      this.setState({ messages: newMessages, newMessage: '' });
    }
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    
    const logoImage = require('./assets/menu-icon.png');

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        
        <View style={{ height: 50, backgroundColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
      
        
          <TouchableOpacity onPress={this.toggleSidebar} style={{ padding: 10 }}>
            <Image source={logoImage} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>New chat</Text>
            <TouchableOpacity onPress={this.toggleSidebar} style={{ padding: 10 }}>
           
          </TouchableOpacity>
          </View>
        </View>


        <View style={{ flex: 1, flexDirection: 'row' }}>
    
          <View
            style={{
              flex: 1,
              backgroundColor: this.state.isSidebarOpen ? 'black' : 'transparent',
              alignItems: 'right',
            }}
          >
            
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: 20,
                marginBottom: 20,
                width: this.state.isSidebarOpen ? '80%' : 0, 
                overflow: 'hidden',
              }}
            >
              
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image
                  source={pic} 
                  style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
                />
                <Text style={{ color: 'white', fontSize: 16 }}>Rodel Glenn Jawa</Text>
              </View>
            </View>
          </View>

          
          <View style={{ flex: 3, backgroundColor: 'white' }}>
            <FlatList
              data={this.state.messages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                  <Text>{item}</Text>
                </View>
              )}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={{ flex: 1, padding: 10 }}
                placeholder="Type your message..."
                value={this.state.newMessage}
                onChangeText={(text) => this.setState({ newMessage: text })}
              />
              <Button title="Send" onPress={this.handleSendMessage} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ChatApp;
