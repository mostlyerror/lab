def quicksort(lst):
    "Quicksort over a list-like sequence"
    if len(lst) == 0:
        return lst
    pivot = lst[0]
    pivots = [x for x in lst if x == pivot]
    print pivots
    small = quicksort([x for x in lst if x < pivot])
    print small
    large = quicksort([x for x in lst if x > pivot])
    print large
    return small + pivots + large

print quicksort([])
print quicksort([3,2,1])
print quicksort([5,1,0,2,2,4,-1,10])
