#!/usr/bin/env ruby

# Given a sequence of non-negative integers a0,…,an−1, find the maximum 
# pairwise product, that is, the largest integer that can be obtained by 
# multiplying two different elements from the sequence (or, more formally, 
# max0≤i≠j≤n−1aiaj). Different elements here mean ai and aj with i≠j (it 
# can be the case that ai=aj).

def max_pairwise_product(ints)
  highest = ints[0]
  second_highest = 0
  ints[1..-1].each do |int|
    if int > highest
      second_highest = highest
      highest = int
    elsif int > second_highest
      second_highest = int
    end
  end
  highest * second_highest
end

if __FILE__ == $0
  data = STDIN.read.split().map(&:to_i)
  n = data[0]
  a = data[1..n]
  puts "#{max_pairwise_product(a)}"
end

