class Book < ApplicationRecord
  belongs_to :author

  scope :available, ->() { where available: true }
  scope :unavailable, ->() { where available: [nil, false] }
end
