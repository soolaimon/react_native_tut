// Import code
var ReactNative = require('react-native');
var React = require('react');
var Text = ReactNative.Text;

// Create Component
var DayItem = React.createClass({
  render() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight(),
    }
  },
  color() {
    var opacity = (1 / this.props.daysUntil).toString();
    console.log(opacity);
    return 'rgba(0, 0, 0, ' +  opacity + ')';
  },
  fontWeight() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString();
  },
  fontSize() {
    return (60 - 7 * this.props.daysUntil);
  },
  lineHeight() {
    return (70 - 4 * this.props.daysUntil);
  }
});



// Make this code available elsewhere
module.exports = DayItem;
