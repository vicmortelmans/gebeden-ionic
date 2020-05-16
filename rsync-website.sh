#!/bin/sh
gsutil -m rsync -e -d -x '\.git.*' -R build gs://test.gelovenleren.net
read -p "Press enter to continue"
