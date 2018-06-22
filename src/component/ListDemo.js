import React,{Component} from 'react';
import {
  View,
  Text,
  ActionSheetIOS,
  Alert,
  Picker,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {
  IndicatorViewPager,
  PagerDotIndicator
} from 'rn-viewpager';

let nextLink = "";
export default class ListDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: [],
    }
    //this.nextLink = "";
  }

  componentDidMount() {
    debugger
    axios.get("https://wearwardrobe.co/api/v1/recent_items",{
      headers: {
        "Authentication" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MX0.tcfbvwUuLnTPMro-5WOujgIiz2OsnNckHCn8iOI5myY"
      }
    }).then((response)=>{
      debugger
      nextLink = response.data.links.next ? response.data.links.next : "";
      this.setState({dataSource: response.data.data});
    }).catch((error)=>{
      alert("Error: " + error);
    })
  }

  renderItems(items, index) {
    let item = items.attributes;
    let photos = item.photos;
    debugger
    return(
      <View>
        <IndicatorViewPager indicator={this.renderDot(photos || [])} style={{height: Dimensions.get('window').width}}>
          {this.renderPhoto(photos)}
        </IndicatorViewPager>
      </View>
    )
  }

  renderDot(photos) {
    return(
      <PagerDotIndicator pageCount={photos.length} selectedDotStyle={{backgroundColor: '#0f0'}}/>
    )
  }

  renderPhoto(photos) {
    let p = [];

    for(let i=photos.length-1;i>=0;i--) {
      p.push(
        <View key={i} style={{flex:1}}>
         <Image source={{uri: photos[i].image.medium.url }} style={{height: '100%', width: '100%'}}/>
        </View>
      )
    }

    return p;
  }

  _handleMore() {
    debugger
    if(nextLink) {
      axios.get(nextLink, {
        headers: {
          "Authentication": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MX0.tcfbvwUuLnTPMro-5WOujgIiz2OsnNckHCn8iOI5myY"
        }
      }).then((response)=>{
        nextLink = response.data.links.next ? response.data.links.next : "";
        this.setState({dataSource: [...this.state.dataSource, ...response.data.data] });
      }).catch((error)=>{
        alert("Error: " + error);
      })
    }
  }

  render() {
    return(
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, index})=> this.renderItems(item, index)}
          keyExtractor={({item, index})=> index}
          onEndReached={this._handleMore}
        />
      </View>
    )
  }
}