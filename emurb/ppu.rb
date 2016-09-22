class PPU
  FRAMEBUFFER_SIZE = 23_040 # 160 & 144 (screen size)

  def initialize
    @framebuffer = Array.new FRAMEBUFFER_SIZE, 0
    @mode = :vertical_blank
    @modeclock = 0
  end
end
