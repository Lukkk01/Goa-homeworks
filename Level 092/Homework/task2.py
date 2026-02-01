nums = [42, 7, 88, 19, 56, 3, 91, 25, 67, 10]

def quick_sort(arr):
  if len(arr) <= 1:
    return arr

  first_element = arr[0]
  left = []
  right = []

  for x in arr[1:]:
    if x < first_element:
      left.append(x)
    else:
      right.append(x)

  return quick_sort(left) + [first_element] + quick_sort(right)

print(quick_sort(nums))


def merge_sort(arr):
  # თუ სია 1 ან 0 ელემენტიანია, უკვე დალაგებულია
  if len(arr) <= 1:
    return arr

  # სიას ვყოფთ შუაზე
  mid = len(arr) // 2
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])

  result = []
  while left and right:
    if left[0] < right[0]:
      result.append(left.pop(0))
    else:
      result.append(right.pop(0))

  result += left + right
  return result

nums = [42, 7, 88, 19, 56, 3, 91, 25, 67, 10]

def quick_sort(arr):
  if len(arr) <= 1:
    return arr

  first_element = arr[0]
  left = []
  right = []

  for x in arr[1:]:
    if x < first_element:
      left.append(x)
    else:
      right.append(x)

  return quick_sort(left) + [first_element] + quick_sort(right)

print(quick_sort(nums))


def merge_sort(arr):
  # თუ სია 1 ან 0 ელემენტიანია, უკვე დალაგებულია
  if len(arr) <= 1:
    return arr

  # სიას ვყოფთ შუაზე
  mid = len(arr) // 2
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])

  result = []
  while left and right:
    if left[0] < right[0]:
      result.append(left.pop(0))
    else:
      result.append(right.pop(0))

  # ვამატებთ დარჩენილ ელემენტებს
  result += left + right
  return result

print(merge_sort(nums))