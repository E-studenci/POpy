import jsonschema


def validate_json(schema, json_data):
    if schema is None:
        return False, "No json schema provided."
    
    if json_data is None:
        return False, "No json data provided."
    
    try:
        jsonschema.validate(instance=json_data, schema=schema)
    except jsonschema.ValidationError as err:
        return False, err.message
    return True, None
