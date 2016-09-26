module Wellspring
  class Entry < ActiveRecord::Base
    scope :published, -> { where('published_at <= ?', Time.zone.now) }

    def self.content_attr(attr_name, attr_type = :string)
      content_attributes[attr_name] = attr_type

      define_method(attr_name) do
	self.payload ||= {}
	self.payload[attr_name.to_s]
      end

      define_method("#{attr_name}=".to_sym) do
	self.payload ||= {}
	self.payload[attr_name.to_s] = value
      end

      def self.content_attributes
	@content_attributes ||= {}
      end
    end
  end
end
