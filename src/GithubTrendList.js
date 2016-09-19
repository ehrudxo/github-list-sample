import React, { Component } from 'react';
import StarInButton from './button.svg';
import './GithubTrendList.css';
import GithubTrendList from './GithubTrendList'

class GithubTrend extends Component{
  render(){
    var poject = this.props.project;
    return (
      <li>
        <div><!-- button -->
            <button>
              <StarInButton/>
              Star
            </button>
        </div>
        <h3><!-- Directory -->
          <a><span>{poject.groupName}</span><span>/</span>{poject.projectName}</a>
        </h3>
        <p><!-- Description -->
          {poject.description}
        </p>
        <p><!-- Contributor -->
          R•{poject.starsToday} stars today•Built by
              <a>
                  <img alt="@{contributors[0].name}" title="{contributors[0].name}" src="{contributors[0].imgSrc}">
                  <img alt="@{contributors[1].name}" title="{contributors[1].name}" src="{contributors[1].imgSrc}">
              </a>
        </p>
      </li>
    )
  }
}

class GithubTrendList extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GithubTrendList/>
      </div>
    );
  }
}

export default GithubTrendList;
