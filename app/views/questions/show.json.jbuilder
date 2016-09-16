json.question(@question, :title, :body)

json.question_comments do
  json.array! @question.comments do |comment|
    json.comment comment.body
  end
end

json.question_answers do
  json.array! @question.answers do |answer|
    json.answer answer.body
        json.answer_comments do
           json.array! answer.comments do |comment|
              json.comment comment.body
            end
        end
  end
end







