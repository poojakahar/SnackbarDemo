import React, { Component } from 'react';
import { View, Text , Button , TouchableHighlight } from 'react-native';
import Drawer from 'react-native-drawer';

export default class DrawerDemoUsingPKG extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
    }
  }

  renderSideMenuContent = () => {
    return (
      <View style={{height: '100%',width:300}}>
        <Text style={{fontSize: 12, color: '#ff5900'}}>
          This is the side menu
        </Text>
      </View>
    )
  }

  renderMainContent = () => {
    if (!this.state.drawerOpen) {
      return (
        <View style={{flex: 1, backgroundColor: '#f00'}}>
          <Text style={{fontSize: 20}}>Push to Open Side Menu</Text>
        </View>
      )
    } else {
      return (
        <Text style={{backgroundColor: '#ff0'}}>
          The side menu is open
        </Text>
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1,paddingTop: 100}}>
        <Drawer
          open={this.state.drawerOpen}
          content={this.renderSideMenuContent()}
          type="overlay"
          tapToClose={true}
          styles={{flex: 1, backgroundColor: '#00f'}}
          openDrawerOffset={0.9}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          onClose={() => {
            this.setState({drawerOpen: false});
          }}
          panOpenMask={0.80}
          captureGestures="open"
          acceptPan={false}>
          <View style={{flex: 1, backgroundColor: '#0f0'}}>
            <TouchableHighlight
              onPress={() => {
                this.setState({drawerOpen: true});
              }}>
              {this.renderMainContent()}
            </TouchableHighlight>
          </View>
        </Drawer>
      </View>
    );
  }
}