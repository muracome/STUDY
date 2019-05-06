import React, { Component } from 'react';
import './Chart.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar
} from 'recharts';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';


const AUTH = 'YOUT_Authorization';

// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/calories/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/steps/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/distance/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/floors/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/elevation/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/minutesSedentary/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/minutesLightlyActive/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/minutesFairlyActive/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/minutesVeryActive/date/2019-03-26/2019-04-01.json';
// const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/activityCalories/date/2019-03-26/2019-04-01.json';

class Chart extends Component {
  handleChange = name => event => {
    setTimeout(() => this.fetchAPI(event.target.value), 0);
    console.log(name)
    console.log(event.target.value)
    this.setState({ [name]: event.target.value });
  };
  setData = () => {
    const data = [];
    data.push({"title": "2019-03-26", 'calories': 2953, 'steps': 2224});
    data.push({"title": "2019-03-27", 'calories': 3011, 'steps': 1233});
    data.push({"title": "2019-03-28", 'calories': 2768, 'steps': 12691});
    data.push({"title": "2019-03-29", 'calories': 2885, 'steps': 12979});
    data.push({"title": "2019-03-30", 'calories': 2625, 'steps': 12062});
    data.push({"title": "2019-03-31", 'calories': 2721, 'steps': 11830});
    data.push({"title": "2019-04-01", 'calories': 2279, 'steps': 1000});
    this.setState({ 'data': data });
  };

  state = {
    leftItem: "",
    rightItem: "",
    data: [],
  }
  fetchAPI(target) {
    const data = this.state.data;
    if (data.find(e => e[target] !== undefined) !== undefined) {
      return;
    }
    const API_URL = 'https://api.fitbit.com/1/user/-/activities/tracker/' + target + '/date/2019-03-26/2019-04-01.json';
    fetch(API_URL, { 
      method: 'get',
      headers: new Headers({
        'Authorization': AUTH, 
        'Content-Type': 'application/json'
      }), 
    }).then(res => res.json()
    ).then(json => {
      json['activities-tracker-' + target].forEach((e, index) => {
        console.log(data.find(d => d.title === e.dateTime))
        if (data.find(d => d.title === e.dateTime) !== undefined) {
          Object.assign(data.find(d => d.title === e.dateTime), {[target]: e.value});
        }
      });
      this.setState(data);
    });
  }

  componentWillMount() {
    this.setData();
    setTimeout(() => this.fetchAPI('calories'), 0);
  }
  
  render() {
    return (
      <div className="Chart">
        <ResponsiveContainer width="80%" height="90%" minWidth={400} minHeight={200}>
          <LineChart
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis
              dataKey="title"
            />
            <YAxis
              dataKey={this.state.leftItem}
            />
            <YAxis
              orientation="right"
              yAxisId="right"
              dataKey={this.state.rightItem}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={this.state.rightItem} stroke="#82ca9d" yAxisId="right" />
            <Line type="monotone" dataKey={this.state.leftItem} stroke="#8884d8" activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>



        <div>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="left-simple">LeftItem</InputLabel>
              <Select
                value={this.state.leftItem}
                onChange={this.handleChange('leftItem')}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="calories">消費カロリー</MenuItem>
                <MenuItem value="steps">歩数</MenuItem>
                <MenuItem value="distance">移動距離</MenuItem>
                <MenuItem value="floors">移動階層数</MenuItem>
                <MenuItem value="elevation">標高数</MenuItem>
                <MenuItem value="minutesSedentary">非活性</MenuItem>
                <MenuItem value="minutesLightlyActive">僅かにアクティブ</MenuItem>
                <MenuItem value="minutesFairlyActive">かなりアクティブ</MenuItem>
                <MenuItem value="minutesVeryActive">凄ぇアクティブ</MenuItem>
                <MenuItem value="activityCalories">運動カロリー</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="right-simple">RightItem</InputLabel>
              <Select
                value={this.state.rightItem}
                onChange={this.handleChange('rightItem')}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="calories">消費カロリー</MenuItem>
                <MenuItem value="steps">歩数</MenuItem>
                <MenuItem value="distance">移動距離</MenuItem>
                <MenuItem value="floors">移動階層数</MenuItem>
                <MenuItem value="elevation">標高数</MenuItem>
                <MenuItem value="minutesSedentary">非活性</MenuItem>
                <MenuItem value="minutesLightlyActive">僅かにアクティブ</MenuItem>
                <MenuItem value="minutesFairlyActive">かなりアクティブ</MenuItem>
                <MenuItem value="minutesVeryActive">凄ぇアクティブ</MenuItem>
                <MenuItem value="activityCalories">運動カロリー</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>

        </div>

      </div>
    );
  }
}

export default Chart;
