require 'httparty'
require 'nokogiri'

module Ideas
  class Client
    Name = Struct.new(:do, :thing)
    BASE_URL = "http://www.wolframcloud.com/objects/microsites/ProjectGenerator.html/idea"

    def store_ideas
      verb_file = File.open('verbs', 'w')
      noun_file = File.open('nouns', 'w')
      #verbs = []
      #nouns = []
      fetch_paginated_data("/idea").take(1000) do |data|
        doc = Nokogiri::HTML(data)
        verb, noun = doc
          .css('img')
          .map {|node| node['src'] }
          .reject {|src| src =~ /images\// }
          .map do |part|
          str = part.split('/').last
          str.gsub('+', ' ') + '\n'
        end

        verb_file << verb
        noun_file << noun
        #verbs << verb
        #nouns << noun
      end
      #puts verbs
      #puts nouns
      verb_file.close
      noun_file.close
    end

    def fetch_paginated_data(path)
      Enumerator.new do |yielder|
        page = 1

        loop do
          url = BASE_URL + "?n=#{page}"
          result = HTTParty.get(url)
          yielder << result
          page += 1
        end.lazy
      end
    end
  end
end

Ideas::Client.new.store_ideas
#result = HTTParty.get("http://www.wolframcloud.com/objects/microsites/ProjectGenerator.html/idea?n=1")
#doc = Nokogiri::HTML(result)
#verbs = []
#nouns = []
#verb, noun = doc
  #.css('img')
  #.map {|node| node['src'] }
  #.reject {|src| src =~ /images\// }
  #.map {|part| part.split('/').last }
  #.map {|str| str.sub('+', ' ') }

#puts verb, noun



