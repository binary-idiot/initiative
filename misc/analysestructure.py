import json

analyseFile = input("File to analyse")
outputFile = input("File to output")

structure = {}

def analyseField(field, parent):
    if isinstance(field, list):
        value = field[0]
        itemStructure = parent.get('array')

        if itemStructure == None:
            itemStructure = {}

        updatedStructure = analyseField(value, itemStructure)
        if(updatedStructure != None):
            parent.update({'array': updatedStructure})
            return parent
        else:
            return None

    elif isinstance(field, dict):
        updated = False

        for key, value in field.items():
            itemStructure = parent.get(key)

            if itemStructure == None:
                itemStructure = {}

            updatedStructure = analyseField(value, itemStructure)
            if updatedStructure != None:
                parent.update({key: updatedStructure})
                updated = True
        if updated:
            return parent
        else:
            None

    else:
        fieldType = type(field).__name__
        item = parent.get(fieldType)
        if(item == None):
            parent.update({fieldType: fieldType})
            return parent
        else:
            return None

with open(analyseFile, 'r') as file:
    data = json.load(file)
    for entry in data:
        updatedStructure = analyseField(entry, structure)

        if updatedStructure != None:
            structure = updatedStructure
    with open(outputFile, 'w') as output:
        json.dump(structure, output)