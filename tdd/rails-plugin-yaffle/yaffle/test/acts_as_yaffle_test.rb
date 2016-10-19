require 'test_helper'

class ActsAsYaffleTest < ActiveRecord::Base
  def test_a_hickwalls_yaffle_text_field_should_be_last_squawk
    assert_equal "Last_squawk", Hickwall.yaffle_text_field
  end

  def test_a_wickwalls_yaffle_text_field_should_be_last_tweet
    assert_equal "Last_tweet", Wickwall.yaffle_text_field
  end
end
