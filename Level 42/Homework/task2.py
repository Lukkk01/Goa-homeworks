def modify_set(input_set):
    
    input_set.add(100)
    input_set.add(200)
    input_set.add(300)

    if 100 in input_set:
        input_set.remove(100)

    return input_set