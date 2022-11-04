#!/usr/bin/env bash

if [ "${AWS_BRANCH}" = "develop" ] || [ "${AWS_BRANCH}" = "master" ] || [ "${AWS_BRANCH}" = "main" ]; then
  echo "true";
else
  echo "false";
fi
