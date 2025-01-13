age = 12
category = cond do
 age >= 65 -> "OAP"
 age >= 18 -> "Adult"
 age >= 13 -> "Teenager"
 true -> "Child"
end
IO.puts(category)
