git add -A
git commit -m "deploy"
git push
docker build --no-cache -t tomayoola/notebook:staging .
docker push tomayoola/notebook:staging
az webapp restart --name uclteam17 --resource-group notebookResourceGroup
