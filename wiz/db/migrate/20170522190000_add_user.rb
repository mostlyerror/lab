class AddUser < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :address_1
      t.string :zip_code
      t.string :city
      t.string :state
      t.string :country
      t.string :phone_number

      t.timestamps
    end
  end
end
