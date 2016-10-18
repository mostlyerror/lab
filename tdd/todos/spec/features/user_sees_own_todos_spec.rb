require 'rails_helper'

feature 'User sees own todos' do
  scenario "doesn't see others' todos" do
    Todo.create!(title: "Buy Eggs", email: "mike@example.com")

    sign_in_as "someone_else@example.com"

    expect(page).not_to display_todo("Buy Eggs")
  end
end
