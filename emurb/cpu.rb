require_relative "./mmu"

class CPU
  OPCODE = [
    :cls,
  ]

=begin 
  nnn or addr - A 12-bit value, the lowest 12 bits of the instruction
  n or nibble - A 4-bit value, the lowest 4 bits of the instruction
  x - A 4-bit value, the lower 4 bits of the high byte of the instruction
  y - A 4-bit value, the upper 4 bits of the low byte of the instruction
  kk or byte - An 8-bit value, the lowest 8 bits of the instruction
=end

  def initialize
    # registers are 8-bit
    @a, @b, @c, @d, @e, @f, @h, @l = 0x0
    # 2-byte program counter and stack pointer
    @pc, @sp = 0x00
  end

  def cls
    # clear the display
  end

  def ret
    # return from a subroutine
    # interpreter sets the program counter to the addr at the top of the stack,
    # then subtracts 1 from the stack pointer
    # @pc = pop
    # @sp -= 1
  end

  def jp nnn
    # set program counter to nnn
    # @pc = nnn
  end

  def call nnn
    # call subroutine at nnn
    # increment stack pointer
    # put current PC on top of stack
    # PC set to nnn
    # @sp += 1
    # push @pc
    # @pc = nnn
  end

  def se x, kk
    # skip next instruction if x == kk
    # compre register Vx to kk
    # if equal increment pc by 2
  end
end

$mmu = MMU.new
