import json

namesPath = input("Enter path to file containing the names of entries to copy:\n")
entriesPath = input("Enter path to json file containing all entries:\n")
copyPath = input("Enter path to save copied entries:\n")

with open(namesPath, 'r') as namesFile:
    names = [entry.rstrip() for entry in namesFile]

    with open(entriesPath, 'r') as entriesFile:
        entriesDict = json.load(entriesFile)
        dictKey = list(entriesDict.keys())[0]
        entries = entriesDict[dictKey]

        copyEntries = []
        for entry in entries:
            if entry['name'] in names:
                copyEntries.append(entry)
                print(entry['name'] + " copied")
        
        copyDict = {dictKey:copyEntries}
        with open(copyPath, 'w') as copyFile:
            json.dump(copyDict, copyFile)