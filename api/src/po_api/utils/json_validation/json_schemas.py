

CREATE_WAYPOINT_SCHEMA = {
    "type" : "object",
    "properties" : {
        "name": {"type" : "string"},
        "elevation": {"type" : "integer"},
        "longtitude": {"type" : "string"},
        "latitude": {"type" : "string"}, 
        "description": {"type" : "string"}, 
        "mountain_range_id": {"type" : "integer"},
    },
    "required": ["name", "elevation", "longtitude", "latitude", "description", "mountain_range_id"]
}

REVIEW_PARTICIPATION_SCHEMA = {
    "type" : "object",
    "properties" : {
        "participation_id": {"type" : "integer"},
        "earned_points": {"type" : "integer"},
        "reviewer_id": {"type" : "integer"},
        "review": {"enum" : ["accepted", "rejected"]},
    },
    "required": ["participation_id", "earned_points", "reviewer_id", "review"]
}


REVIEW_BADGE_ACQUIREMENT_SCHEMA = {
    "type" : "object",
    "properties" : {
        "badge_acquirement_id": {"type" : "integer"},
        "reviewer_id": {"type" : "integer"},
        "required_points": {"type" : "integer"},
        "earned_points": {"type" : "integer"},
        "review": {"enum" : ["accepted", "rejected"]},
    },
    "required": ["badge_acquirement_id", "review"]
}

CREATE_USER_SCHEMA = {
    "type" : "object",
    "properties" : {
        "login": {"type" : "string",
                 "maxLength": 30},
        "password": {"type" : "string",
                    "maxLength": 255},
        "name": {"type" : "string",
                "maxLength": 30},
        "surname": {"type" : "string",
                    "maxLength": 30}, 
        "email": {"type" : "string",
                "maxLength": 30},
        "role": {"type" : "string"},
        "args": {"type": "object",
            "properties": {
                "is_handicapped": { "type": "boolean" },
                "birth_date": { 
                    "type": "string",
                    "format": "date" },
                "licence_nr": { "type": "string" },
        }}
    },
    "required": ["login", "password", "name", "surname", "email", "role", "args"]
}

CREATE_TRIP_PLAN_SCHEMA = {
    "type" : "object",
    "properties" : {
        "name": {"type" : "string",
                "maxLength": 30},
        "description": {"type" : "string",
                        "maxLength": 255},
        "difficulty": {"enum" : ["easy", "semi_easy", "medium", "semi_medium", "hard"]},
        "is_public": {"type" : "boolean"}, 
        "creator_id": {"type" : "integer"}, 
        "distance": {"type" : "integer"},
        "path_ids": {
            "type" : "array",
            "items": {
                "type": "integer"
            }
        },
    },
    "required": ["name", "description", "difficulty", "is_public", "creator_id", "distance", "path_ids"]
}

CREATE_PATH_SCHEMA = {
    "type" : "object",
    "properties" : {
        "color": {"enum" : ["red", "green", "blue", "black", "yellow"]},
        "is_official": {"type" : "boolean"},
        "points": {"type" : "integer"},
        "waypoint_a_id": {"type" : "integer"}, 
        "waypoint_b_id": {"type" : "integer"},
        "distance": {"type" : "integer"},
        "status": {"enum" : ["open", "closed"]}
    },
    "required": ["color", "is_official", "points", "waypoint_a_id", "waypoint_b_id", "distance"]
}

EDIT_PATH_SCHEMA = {
    "type" : "object",
    "properties" : {
        "color": {"enum" : ["red", "green", "blue", "black", "yellow"]},
        "is_official": {"type" : "boolean"},
        "points": {"type" : "integer"},
        "waypoint_a_id": {"type" : "integer"}, 
        "waypoint_b_id": {"type" : "integer"},
        "distance": {"type" : "integer"},
        "status": {"enum" : ["open", "closed"]}
    }
}