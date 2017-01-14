
def quicksort(arr) 
  return arr if arr.empty?
  pivot = arr.first
  pivots = arr.select {|i| i == pivot }
  small = quicksort arr.select {|i| i < pivot }
  large = quicksort arr.select {|i| i > pivot }
  small + pivots + large
end
p quicksort([])
p quicksort([3,2,1])
p quicksort([5,1,0,2,2,4,-1,10])
