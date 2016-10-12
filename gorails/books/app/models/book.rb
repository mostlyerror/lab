class Book < ApplicationRecord
  extend FriendlyId

  friendly_id :title, use: :slugged

  mount_uploader :cover_image, ImageUploader

  belongs_to :user
end
