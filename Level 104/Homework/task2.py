'https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/python'
# Follow that Spy

def find_routes(routes):
    route_map = {start: end for start, end in routes}
    
    starts = set(route_map.keys())
    ends = set(route_map.values())
    
    start = (starts - ends).pop()
    
    result = [start]
    
    while start in route_map:
        start = route_map[start]
        result.append(start)
        
    return ", ".join(result)