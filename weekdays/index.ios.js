var ReactNative = require('react-native');
var React = require('react');
var AppRegistry = ReactNative.AppRegistry;
var StyleSheet = ReactNative.StyleSheet;
var Text = ReactNative.Text;
var View = ReactNative.View;
var DayItem = require('./src/day_item');
var Moment = require('moment');

// Create a react component
var Weekdays = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  },

  days() {
    let dayItems = [];
    for(var i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil={i} />
      );
    }
    return dayItems;
  },
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  }

});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
})
