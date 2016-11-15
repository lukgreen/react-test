var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    this.setState({isLoading: true});
    var url = `http://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=9f6654d98bb525be4db17131dbce690e`;
    fetch(url)
      .then(function(response) { return response.json(); })
      .then(json => {
        this.setState({
          isLoading: false,
          location: location,
          temp: json.list[0].main.temp
        });
      });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
