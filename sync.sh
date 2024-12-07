#!/bin/bash
echo "Fetching latest changes from origin yllaaa ..."
git fetch origin
git pull origin main

echo "Pushing changes to deploy MOUSTAFA ..."
git push deploy main --force

echo "Sync complete!"
