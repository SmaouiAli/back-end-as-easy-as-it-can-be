import React, { Component } from "react";
import dataMongo from '../../Quiz/quizMongo';
import Score from './Score.jsx'
class CheckMongo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : this.props.name,
      countRightAnswers: 0,
      show:""
    };
    this.counter = this.counter.bind(this);
    this.results = this.results.bind(this);
  }
  counter(){
    let rightAnswer = document.getElementById('option1');
    if(rightAnswer) {
      this.setState({countRightAnswers : this.state.countRightAnswers + 1});
    }
  }
  results(event,id){
    event.preventDefault();
   
    this.setState({show: "show"})
  }
  render() {
    const mongoData = dataMongo.map((item,key) => (
      <div key={key}>
        <form>
        <p id='checkp'>{item.question}</p>
          <input type="radio" id="option1" onClick={this.counter}/>
          <label id='lb'>{item.option1}</label>
          <br />
          <input type="radio" id="option2" name="" value="f" />
          <label id='lb'>{item.option2}</label>
          <br />
          <input type="radio" id="option3" name="" value="" />
          <label id='lb'>{item.option3}</label>
        </form>
      </div>
    ))
    if(this.state.show === ""){
      return (
      <div>
        {mongoData}
      <button id='bb'onClick={(event) =>this.results(event)}>submit</button>
    
      </div>
    )
    }else {
      return (
        <Score result={this.state.countRightAnswers}/>
      )
    }
    
  }
}

export default CheckMongo;
