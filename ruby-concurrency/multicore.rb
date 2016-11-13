def cpu_intensive_process
  puts "Pid: #{Process.pid}"
  x = 0
  10000000.times do |i|
    x = i + x
  end
end

fork
fork
cpu_intensive_process #should see two processors flat out!
