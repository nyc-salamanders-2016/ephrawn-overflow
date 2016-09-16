class QuestionList extends React.Component {

  constructor(){
    super()
    this.state = {
      questions: [],
      clicked: false

    }
    this.click = this.click.bind(this),
    this.showform = this.showform.bind(this)
  }

  componentDidMount(){
    this.setState({
      questions: JSON.parse(this.props.data)
    })
  }

  click(){
    this.setState({
      clicked: true
    })
  }

  showform(){
    if(this.state.clicked){
      return <QuestionForm />
    }else{
      return null;
    }
  }


  render(){
    return(
      <div>
        <section className="question-thread">
          <h2>Trending Questions </h2>
          <ul>
            {
              this.state.questions.map((question, i) => {
                return (<QuestionTitle key={i} data={question} />)
              })
            }
          </ul>
          <button onClick={this.click}>Post New Question</button>
        </section>
        {this.showform()}
      </div>
      )
  }

}
