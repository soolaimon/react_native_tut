var ReactNative = require('react-native');
var React = require('react');

var {
  StyleSheet,
  Navigator
} = ReactNative;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  tweets: Tweets
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('Z1aCsgoq2q2M0ObgmFCT8sS0QZbUrJPkLfYKbP1U', '13sQ24j8WOo8F6fnk920svQbRoG5EhjEbuixH6oM');
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{ name: 'signin' }}
        renderScene={ this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
