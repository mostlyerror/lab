module Yaffle
  module ActsAsYaffle
    extend ActiveSupport::Concern

    included do
    end

    module ClassMethods
      def acts_as_yaffle(options = {})
	attr_accessor :yaffle_text_field
	self.yaffle_text_field = (options[:yaffle_text_field] || :last_squawk).to_s
      end
    end
  end
end
