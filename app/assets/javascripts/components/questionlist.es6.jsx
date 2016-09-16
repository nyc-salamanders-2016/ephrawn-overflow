class QuestionList extends React.Component {

  constructor(){
    super()
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    this.setState({
      questions: JSON.parse(this.props.data)
    })
  }

  showform(event){

    return <QuestionForm />
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
          <button onClick={this.showform}>Post New Question</button>
        </section>
        {this.showform()}
      </div>
      )
  }

}
