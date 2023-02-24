#!/bin/bash

sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/eslint-config-incubator/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/incubator-core/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/incubator-tsconfig/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/incubator-utils/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/prettier-config-incubator/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/stylelint-config-incubator/.npmrc
