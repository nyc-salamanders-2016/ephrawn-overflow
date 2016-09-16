class QuestionForm extends React.Component {
  render(){
    return(
      <form>
        <input type="text" placeholder="Title" /><br/><br/>
        <textarea placeholder="ask your question"></textarea><br/>
        <input type="submit" value="Ask!" />
      </form>
      )
  }
}
