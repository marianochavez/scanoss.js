#!/bin/bash

# Command used to generate the expected output for yarn.lock with scancode
scancode --json-pp - --package $1 | jq -c '.dependencies[] | { "purl": .purl , "requirement": .extracted_requirement | split(" ") | join(", ") }'
