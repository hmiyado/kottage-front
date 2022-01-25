yarn regenerate-client
if [ -z "$(git status --porcelain)" ]; then
  # do nothing when repository is clean
  exit 0
else
  # repository should be clean after regenerate-client
  git status
  git diff .
  exit 1
fi
