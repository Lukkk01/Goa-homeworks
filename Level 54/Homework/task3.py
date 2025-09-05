def info(**names):
    if 'name' in names and 'age' in names:
        print(f'name: {names['name']}, age: {names['age']}')