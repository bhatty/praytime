#!/bin/bash

# TODO: set trap

set -euf -o pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

. "${SCRIPT_DIR}/../.env"

resultsUrl="$(curl \
    -fsSL \
    --request POST \
    --header "Content-Type: application/json" \
    --data-binary "$(./post-data.sh)" \
    https://api.apify.com/v1/hMf69fRQCWWX84d5Z/crawlers/bBG5kmupgKJPssdeh/execute?token="${APIFY_TOKEN}" \
    | jq --raw-output '.resultsUrl')"  
    
echo "resultsUrl is $resultsUrl"

while 
    sleep 1
    results=$(curl -fsSL "$resultsUrl")
    resultsLen=${#results}
    (( resultsLen == 2 ))
do
    continue
done

echo "$results" | jq '.[].pageFunctionResult'
