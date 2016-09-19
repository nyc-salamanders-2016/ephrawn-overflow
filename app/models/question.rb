class Question < ApplicationRecord
  has_many :answers

  has_many :comments, :as => :commentable
end
