#!/bin/sh
gsutil -m rsync -e -x '\.git.*' -R build gs://test.gelovenleren.net
read -p "Press enter to continue"
