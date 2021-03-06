class QuestionsController < ApplicationController

  def index
    @questions = Question.all.to_json
  end

  def create
    question = Question.new(question_params)
    if question.save
      redirect_to question
    else

    end
  end

  def show
    @question = Question.find(params[:id])

  end

  private

  def question_params
    params.require(:question).permit(:title, :body)
  end

end
