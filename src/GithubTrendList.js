import React, { Component } from 'react';
import starbtn from './button.svg';
import './GithubTrendList.css';

let projectList = []; // 배열로 정리 합니다.
projectList.push({
  group : "arielf",
  name : "weight-loss",
  description : "Machine Learning meets ketosis: how to effectively lose weight",
  contributors :[{name:"arielf", imgSrc:"https://avatars0.githubusercontent.com/u/159664?v=3&amp;s=40"}
                ,{name:"pgilad", imgSrc:"https://avatars1.githubusercontent.com/u/4533329?v=3&amp;s=40"}],
  starsToday : 752
});
// Github Trend List를 읽어오는 컴포넌트. getGithubList함수는 아래에 정의 되어 있습니다.
class GithubTrendList extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Github List</h2>
        </div>
        <ol className="repos">
        {getGithubList(projectList)}
        </ol>
      </div>
    );
  }
}
//일반 함수 패턴에 관해서는 React Component 에서 설명했습니다.
function getGithubList( projects ) {
    var listJSX = [];
    projects.forEach(function( project, i){
      listJSX.push(
        <li key={i} className="repo-list-item">
          <div className="repo-list-stats">
              <button>
                <img src={starbtn} alt="star" />
                Star
              </button>
          </div>
          <h3   className="repo-list-name">
            <a href={"http://github.com/"+project.group+"/"+project.name}>
              <span>{project.group}</span><span>/</span>{project.name}
            </a>
          </h3>
          <p className="repo-list-description">
            {project.description}
          </p>
          <p className="repo-list-meta">
            R•{project.starsToday} stars today•Built by
            <a href={"http://github.com/"+project.group+"/"+project.name+"/graphs/contributors"}>
            {getContributors(project.contributors)}
            </a>
          </p>
        </li>
      );
    });
    return listJSX;
}
// 컨트리뷰터들의 사진을 보여주는 img 리스트를 만들어 주게 함. 일반 함수로 짜면 좋은 점 중에 하나가
// div wrapping을 다시 해줄 필요가 없다.
function getContributors(contributors){
  let listcontrobutors=[];
  contributors.forEach(function(contributor,i){
    listcontrobutors.push(
          <img key={i} alt={"@"+contributor.name} title={contributor.name} src={contributor.imgSrc}/>
    );
  });
  return listcontrobutors;
}
export default GithubTrendList;
