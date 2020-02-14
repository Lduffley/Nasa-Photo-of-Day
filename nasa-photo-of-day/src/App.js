import React, {Component} from 'react';
import './App.css';
import DateInput from "./DateInput"
import Photo from "./Photo"

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };
  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };
render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput
          changeDate={this.changeDate}
          date={this.state.date}
        />
         <Photo photo={this.state.photo} />
      </div>
    );
  }
}
export default App;
