class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.belongs_to :author, index: true
      t.datetime :published_at
      t.boolean :available


      t.timestamps
    end
  end
end
