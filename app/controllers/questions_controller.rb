class QuestionsController < ApplicationController

  def index
    @questions = Question.all.to_json
  end

  def create

  end

end
