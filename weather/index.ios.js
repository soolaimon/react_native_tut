var React = require('react');
var ReactNative = require('react-native');
var Api = require('./src/api');
var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = ReactNative;


var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0,
      }
    }
  },
  render: function() {
    return (
      <MapView 
        annotations={[this.state.pin]}
        style={styles.map}
        onRegionChangeComplete={this.onRegionChangeComplete}
      >
      </MapView>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude,
      }
    });
    
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1,
  }
});

AppRegistry.registerComponent('weather', () => Weather)
