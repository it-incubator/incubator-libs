#!/bin/bash

sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/eslint-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/prettier-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/stylelint-config/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/tsconfig/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/ui-kit/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/utils/.npmrc
sed -i -e "s/NPM_ACCESS_TOKEN/$1/g"  packages/md-bundler/.npmrc
