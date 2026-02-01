def caesar_cipher(text, shift):
    result = ""

    for char in text:

        if 'a' <= char <= 'z':
            new_char = chr(ord(char) + shift)
            result += new_char

        elif 'A' <= char <= 'Z':
            new_char = chr(ord(char) + shift)
            result += new_char

        else:
            result += char

    return result
