#puts "hello from #{Process.pid}"

#puts fork

#puts "hello again from #{Process.pid}"


puts "You can also put forked code in a block pid: #{Process.pid}"
fork do
  puts "Hello from fork pid: #{Process.pid}"
end
puts "The parent process just skips over it: #{Process.pid}"
