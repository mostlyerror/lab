class Author < ApplicationRecord
  has_many :books

  scope :available_books, ->() { joins(:books).merge(Book.available) }
end
