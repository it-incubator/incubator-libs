#!/bin/bash

sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/incubator-utils/.npmrc
