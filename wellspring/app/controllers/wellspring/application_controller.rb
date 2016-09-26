module Wellspring
  class ApplicationController < ActionController::Base
    def content_entries_path
      entries_path(content_class: content_class.tableize)
    end
    helper_method :content_entries_path
  end
end
