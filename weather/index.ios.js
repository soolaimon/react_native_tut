var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = ReactNative;

var Api = require('./src/api');


var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0,
        city: '',
        temperature: '',
        description: '',
      }
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <MapView 
          annotations={[this.state.pin]}
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
        </MapView>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            {this.state.city}
          </Text>
          <Text style={styles.text}>
            {this.state.temperature}
          </Text>
          <Text style={styles.text}>
            {this.state.description}
          </Text>
        </View>
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude,
      }
    });

    Api(region.latitude, region.longitude)
      .then((data) => {
        this.setState(data);
      });
    
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 2,
    marginTop: 30,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('weather', () => Weather)
