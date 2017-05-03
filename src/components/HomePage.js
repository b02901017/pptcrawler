import React, { Component } from 'react';

import Navbar from './Navbar';
class HomePage extends Component {
  constructor(props) {
      super(props);
      this.state = { m_list: [] , index : 0};
  }
  componentWillMount(){
    fetch("/api/movie/")
            .then(res => {
                if (res == "error") {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(json => {
                this.setState({
                    m_list: json
                })
                console.log(this.state.m_list);
            }).catch((error)=> {
                console.log("error");
            });

  }
  renderTebleItem(item, i){
    const {Author, Catagory, Content, Date, Link, Push} = item;
    return(
      <tr>
        <td className="mdl-data-table__cell--non-numeric custom">{Push}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Catagory}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Date}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Author}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Content}</td>
      </tr>

    )

  }
  handleLeft(){
    const {index } = this.state;
    this.setState({
      index : Math.max(0, index-10)
    })
  }
  handleRight(){
    const {index , m_list} = this.state;
    this.setState({
      index : Math.min(index + 10 , m_list.length-10)
    })

  }
  render() {
    const {m_list, index} = this.state;

    return (
      <div className = "main" >
        <div className="glyphicon glyphicon-chevron-left btn-left" onClick = {this.handleLeft.bind(this)} />
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric custom">Push</th>
              <th className="mdl-data-table__cell--non-numeric custom">Catagory</th>
              <th className="mdl-data-table__cell--non-numeric custom">Date</th>
              <th className="mdl-data-table__cell--non-numeric custom">Author</th>
              <th className="mdl-data-table__cell--non-numeric custom">Content length</th>
            </tr>
          </thead>
          <tbody>
            {m_list.slice(index,index+10).map(this.renderTebleItem,this)}
          </tbody>
        </table>

        <div className="glyphicon glyphicon-chevron-right btn-right " onClick = {this.handleRight.bind(this)} />
      </div>)
  }
}

export default HomePage;
