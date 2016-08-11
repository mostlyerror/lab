defmodule Attendee do
  @derive Access
  defstruct name: "", over_18: false
end

# apparently, this only worked at the time of the book writing!
# 
# https://github.com/elixir-lang/elixir/issues/2973
# Elixir team re-defined the Access protocol to only dictionaries.
