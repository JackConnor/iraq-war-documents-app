# Pushing to GCLOUD - Iraq War
<!-- Step 1:`rm -rf dist && rm -rf gcloud-exports && ng build --prod` -->
Step 1:`rm -rf dist && rm -rf gcloud-exports && ng build --prod && npm run build`
step 3: `mkdir gcloud-exports && cp -rf dist/iraqWar gcloud-exports/dist && cp app.yaml gcloud-exports/app.yaml && cd gcloud-exports`

<!-- Production -->
step 5: Clear out our gcloud bucket `gsutil -m rm 'gs://staging-bucket-focus-groups/**'`
step 6: Push our new angular code to gcloud bucket and deploy `gcloud app deploy --bucket=gs://staging-bucket-focus-groups`
