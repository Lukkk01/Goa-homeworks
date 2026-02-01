nums = [7, 34, 8, 1, 60, 56, 9]

def insert_sort(arr):
  for i in range(1, len(arr)):
    k = arr[i]

    j = i - 1
    
    while j >= 0 and arr[j] > k:
      
      arr[j + 1] = arr[j]

      j -= 1

    arr[j + 1] = k

  return arr


nums = [7, 34, 8, 1, 60, 56, 9]

def insert_sort(arr):
  for i in range(1, len(arr)):

    k = arr[i]

    j = i - 1
    
    while j >= 0 and arr[j] > k:
      
      arr[j + 1] = arr[j]

      j -= 1

    arr[j + 1] = k

  return arr

print(insert_sort(nums))