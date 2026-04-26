# https://www.codewars.com/kata/587fb57e12fc6eadf200009b/train/python

import hashlib

def sha256(s):
    return hashlib.sha256(s.encode()).hexdigest()