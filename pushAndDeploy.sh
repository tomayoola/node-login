git add -A
git commit -m "deploy"
git push
docker build --no-cache -t tomayoola/notebook .
docker push tomayoola/notebook:latest
az webapp restart --name uclteam17 --resource-group notebookResourceGroup
