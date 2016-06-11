var ReactNative = require('react-native');
var React = require('react');

var {
  View,
  Text,
  StyleSheet
} = ReactNative;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('Z1aCsgoq2q2M0ObgmFCT8sS0QZbUrJPkLfYKbP1U', '13sQ24j8WOo8F6fnk920svQbRoG5EhjEbuixH6oM');
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
