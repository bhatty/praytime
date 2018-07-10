#!/usr/bin/env bash

# TODO: set trap

set -euf -o pipefail

echoerr() { 
    >&2 echo "$@"
}

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# shellcheck source=/dev/null
[[ -e "${SCRIPT_DIR}/../.env" ]] && . "${SCRIPT_DIR}/../.env"


"${SCRIPT_DIR}/run.sh" | go run "${SCRIPT_DIR}/db-save/main.go"

