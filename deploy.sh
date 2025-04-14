#!/bin/bash

if npm run build; then
    tar -czvf dist.tgz dist/

    scp dist.tgz root@116.62.105.150:/deploy/train/front

    ssh root@116.62.105.150 'cd /deploy/train/front && tar -xzvf dist.tgz && rm dist.tgz'
else
    echo "Build failed. Exiting..."
    exit 1
fi