import json
import re

file = open("./2024/crescendo_config.js")
str = file.read().removeprefix("var config_data = `")
str = str.removesuffix("`;")
file.close()
data = json.loads(str)
result = ""
for val in data["prematch"]:
    result += val["name"] + ","
for val in data["auton"]:
    result += val["name"] + ","
for val in data["teleop"]:
    result += val["name"] + ","
for val in data["endgame"]:
    result += val["name"] + ","
for val in data["postmatch"]:
    result += val["name"] + ","
result = result.removesuffix(",")
print(result) 