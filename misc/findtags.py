filePath = input("Enter path to file to search for @ tags")
outputPath = input("Enter path to file to output tags")

with open(filePath, 'r') as file:

	tags = []
	for line in file:
		startIndex = 0

		while True:
			tagAt = line.find('@', startIndex)
			if tagAt == -1:
				break
			tagEnd = line.find(' ', tagAt + 1)
			altEnd = line.find('}', tagAt + 1)
			if altEnd < tagEnd:
				tagEnd = altEnd

			tag = line[tagAt:tagEnd]

			if tag not in tags:
				tags.append(tag)

			startIndex = tagEnd
	with open(outputPath, 'w') as outputFile:
		for tag in tags:
			outputFile.write(tag + '\n')