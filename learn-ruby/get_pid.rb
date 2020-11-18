require 'ffi'

module MyLibCWrapper
  extend FFI::Library
  ffi_lib FFI::Library::LIBC
  attach_function :getpid, [], :int
end

puts MyLibCWrapper.getpid
puts $$
