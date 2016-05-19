var ReactNative = require('react-native')
var React = require('react')

var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = ReactNative;

var StopWatch = React.createClass({
  render: function() {
    return (<View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}> 
          <View style={[this.border('red'), styles.timerWrapper]}> 
            <Text> 
              00:00:00
            </Text>
          </View>
          <View style={[this.border('green'), styles.buttonWrapper]}> 
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.footer, this.border('blue')]}> 
          <Text>
            I am a list of laps
          </Text>
        </View>
      </View>)
  },
  startStopButton: function() {
    return(
      <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return(
      <View>
        <Text>
          Lap
        </Text>
      </View>
    );
  },
  handleStartPress: function() {
    console.log('Start was pressed')
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4,
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch',
   },
  header: { 
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
