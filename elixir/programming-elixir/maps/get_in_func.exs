
authors = [
  %{ name: "Jose", language: "elixir" },
  %{ name: "Matz", language: "ruby" },
  %{ name: "Larry", language: "perl" },
  %{ name: "Guido", language: "python" }
]

languages_with_an_r = fn (:get, collection, next_fn) ->
  for row <- collection do
    if String.contains?(row.language, "r") do
      next_fn.(row)
    end
  end
end

# if you pass a func as a key to get_in, that func is invoked
# to return the corresponding values
IO.inspect get_in(authors, [languages_with_an_r, :name])
