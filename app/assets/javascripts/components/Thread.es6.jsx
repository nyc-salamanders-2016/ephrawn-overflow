class Thread extends React.Component {

  constructor(){
    super()
    this.state = {
      question_info: null,
      clicked: false
    }
    this.stateEmpty = this.stateEmpty.bind(this)
    this.showform = this.showform.bind(this)
  }

  componentDidMount(){
    $.ajax({
      url: '/questions/1',
      method: 'GET',
      dataType: "json"
    })
    .done((response) => {
      this.setState({
      question_info: response
      })
    })
  }

  click(){
    this.setState({
      clicked: true
    })
  }

  showform(){
    if(this.state.clicked){
      return <AnswerForm />
    }else{
      return null;
    }
  }

  stateEmpty(){
    if (this.state.question_info){
      return (
        <div>
          <h2>Question</h2>
          <h3><QuestionTitle data={this.state.question_info.question}/></h3>
          <QuestionBody data={this.state.question_info.question}/>
          <button onClick={this.click}>Answer Question</button>
          <h2>Answers</h2>
          <ul>
            {
              this.state.question_info.question_answers.map((answer) => {
                  return (<Answer data={answer}/>)
                })
             }
           </ul>
       </div>
      )
    }
    return null
  }

  render(){
    return(
      <section>
       {this.stateEmpty()}
      </section>
      )
  }
}
