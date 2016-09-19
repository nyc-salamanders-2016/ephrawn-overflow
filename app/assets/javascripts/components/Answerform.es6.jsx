class AnswerForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    $.ajax({

    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input ref="questionId" type="hidden" name = "answers[question_id]"
        <textarea name="answers[body]" placeholder="Answer your question here"></textarea><br/>
        <input type="submit" value="Answer!~" />
      </form>
      )
  }

}
