

CREATE_WAYPOINT_SCHEMA = {
    "type" : "object",
    "properties" : {
        "name": {"type" : "string"},
        "elevation": {"type" : "integer"},
        "longitude": {"type" : "string"},
        "latitude": {"type" : "string"}, 
        "description": {"type" : "string"}, 
        "mountain_range_id": {"type" : "integer"},
    },
    "required": ["name", "elevation", "longitude", "latitude", "description", "mountain_range_id"]
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
        "badge_acquirement_id": {"type" : "string"},
        "review": {"enum" : ["accepted", "rejected"]},
    },
    "required": ["badge_acquirement_id", "review"]
}

CREATE_USER_SCHEMA = {
    "type" : "object",
    "properties" : {
        "login": {"type" : "string"},
        "password": {"type" : "string"},
        "name": {"type" : "string"},
        "surname": {"type" : "string"}, 
        "is_handicapped": {"type" : "boolean"}, 
        "birth_date": {"type" : "string"},
    },
    "required": ["name", "elevation", "longitude", "latitude", "description", "mountain_range_id"]
}

CREATE_TRIP_PLAN_SCHEMA = {
    "type" : "object",
    "properties" : {
        "name": {"type" : "string"},
        "description": {"type" : "string"},
        "difficulty": {"enum" : ["easy", "semi_easy", "medium", "semi_medium", "hard"]},
        "is_public": {"type" : "boolean"}, 
        "creator_id": {"type" : "integer"}, 
        "paths": {
            "type" : "array",
            "items": {
                "type": "integer"
            }
        },
    },
    "required": ["name", "description", "difficulty", "is_public", "creator_id", "paths"]
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
    }
}