# public/mockServiceWorker.js had diff
# https://github.com/hmiyado/kottage-front/runs/4930491171?check_suite_focus=true

if [ "$(git diff --name-only)" = public/mockServiceWorker.js ]; then
  git add public/mockServiceWorker.js
  git commit -m 'update public/mockServiceWorker.js'
  git push
  # update file but fail ci. ci re-runs on push above
  exit 1
fi