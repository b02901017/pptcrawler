import React, { Component } from 'react';
import Select from 'react-select'
import Navbar from './Navbar';
class HomePage extends Component {
  constructor(props) {
      super(props);
      this.state = { m_list: [], v_list : [], c_list : [], index : 0, selectValue : ""};
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
                let c_list = json.map(function(i) {return i.Category;});
                c_list = [...new Set(c_list)];
                this.setState({
                    m_list: json,
                    v_list : json,
                    c_list : c_list
                })
            }).catch((error)=> {
                console.log("error");
            });

  }
  renderTebleItem(item, i){
    const {Author, Category, Content, Date, Link, Push} = item;
    return(
      <tr>
        <td className="mdl-data-table__cell--non-numeric custom">{Push}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Category}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Date}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Author}</td>
        <td className="mdl-data-table__cell--non-numeric custom">{Content}</td>
        <td className="mdl-data-table__cell--non-numeric custom"><a href = {"https://www.ptt.cc/"+Link}>點我</a></td>
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
  updateSelect(newValue) {
    const {m_list} = this.state;
    this.setState({ selectValue: newValue });
    let result = m_list.filter(function( obj ) {
      return obj.Category == newValue;
    });
    if (!newValue){
      result = m_list
    }
    this.setState({
      v_list : result,
      index : 0 
    })
  }
  render() {
    const {m_list, index, c_list, v_list} = this.state;
    let options = c_list.map(function(c) {
        var eObj = {};
        eObj['label'] = c;
        eObj['value'] = c;
        return eObj;
    });
    return (
      <div className = "main" >
        
        <div className="glyphicon glyphicon-chevron-left btn-left" onClick = {this.handleLeft.bind(this)} />
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric custom">Push</th>
              <th className="mdl-data-table__cell--non-numeric custom">Category</th>
              <th className="mdl-data-table__cell--non-numeric custom">Date</th>
              <th className="mdl-data-table__cell--non-numeric custom">Author</th>
              <th className="mdl-data-table__cell--non-numeric custom">Content length</th>
              <th className="mdl-data-table__cell--non-numeric custom">查看原文</th>
            </tr>
          </thead>
          <tbody>
            {v_list.slice(index,index+10).map(this.renderTebleItem,this)}
          </tbody>
        </table>
        <div className = "search" >
        <Select ref = "rIDSelect"
          autofocus options = { options }
          simpleValue placeholder = "請輸入類別"
          clearable = { true }
          value = { this.state.selectValue }
          onChange = { this.updateSelect.bind(this) }
          searchable = { this.state.searchable } /> 
        </div >

        <div className="glyphicon glyphicon-chevron-right btn-right " onClick = {this.handleRight.bind(this)} />
      </div>)
  }
}

export default HomePage;
