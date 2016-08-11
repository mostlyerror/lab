# a struct is a module that wraps a limited form of map, limited because the keys
# must be atoms and they don't have Dict or Access capabilities.

defmodule Subscriber do
  defstruct name: "", paid: false, over_18: true
end

# syntax for creating a struct is the same as map - you simply add the
# module name between the % and {
#
# s1 = %Subscriber{ name: "Ben" }

# fields can be accessed using dot notation..
# s1.name

# or pattern matching..
# %Subscriber{ name: a_name } = s1

# Same for updates:
# s2 = %Subscriber{ s1 | name: "Marie" }

