class MMU
  MEMORY_SIZE = 65536 # bytes

  def initialize
    @memory = Array.new MEMORY_SIZE, 0
  end
end
