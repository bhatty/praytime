#!/bin/bash

cat <<EOF
{
  "_id": "bBG5kmupgKJPssdeh",
  "startUrls": [ { "value": "http://masjidds.org/" } ],
  "pageFunction": $(python -c 'import json,sys; print(json.dumps(sys.stdin.read()))' < page-function.js)
}
EOF

