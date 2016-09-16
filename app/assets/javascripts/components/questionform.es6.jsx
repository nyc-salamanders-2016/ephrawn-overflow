class QuestionForm extends React.Component {
  render(){
    return(
      <form action="/questions" method="post">
        <input type="text" name="question[title]"placeholder="Title" /><br/><br/>
        <textarea name="question[body]"placeholder="ask your question"></textarea><br/>
        <input type="submit" value="Ask!" />
      </form>
      )
  }
}
