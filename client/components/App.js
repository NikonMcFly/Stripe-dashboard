import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/styles.scss';
import {Bar} from 'react-chartjs-2';
import { getPosts } from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
      this.props.getPosts();
    }

  render(){
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div className="home">
        <div>hello</div>
        <Bar data={data} width={200} height={300} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
};

const mapDispatchToProps = {
    getPosts
}


export default connect(null, mapDispatchToProps)(App)
