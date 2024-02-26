var config_data = `
{
  "dataFormat": "kvs",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Cool Robot Name",
      "code": "crn",
      "type": "text"
    },
    { "name": "Width (inches)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length (inches)",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Gear Ratio",
      "code": "gr",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>"
      },
      "defaultValue":"n"
    },
    { "name": "Score Areas",
      "code": "sa",
      "type": "radio",
      "choices": {
        "s": "Speaker<br>",
        "a": "Amp<br>",
        "b": "Both<br>",
        "n": "None<br>"
      },
      "defaultValue": "s"
    },
    { "name": "Good Driver (checked = yes)",
      "code": "gdr",
      "type": "bool"
    },
    { "name": "Good Defense (checked = yes)",
      "code": "gde",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Times Amplified",
      "code": "tta",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "shape": "circle 5 black red true"
    }
  ],
  "endgame": [
    { "name": "Climb Time",
      "code": "dt",
      "type": "text"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "c": "Can't Climb<br>",
        "s": "Single Climb<br>",
        "d": "Double Climb<br>",
        "o": "Other<br>"
      },
      "defaultValue": "o"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
  ]
}`;
