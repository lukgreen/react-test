var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = props => {
  return (
    <div>
      <h1>Nav component</h1>
      <IndexLink to='/'>Get Weather</IndexLink>
      <Link to='/about'>About</Link>
      <Link to='/examples'>Examples</Link>
    </div>
  );
};

module.exports = Nav;
