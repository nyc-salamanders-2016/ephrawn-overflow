class AnswersController < ApplicationController

  def create
    answer = Answer.new(question_params)
    if question.save
      redirect_to question
    else

    end
  end

private

  def question_params
    params.require(:answer).permit(:body, :question_id)
  end


end
