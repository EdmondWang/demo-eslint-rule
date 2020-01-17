# Tips for self

## To dry run with one rules:
Take `space-infix-ops` as sample:
```
eslint . --no-eslintrc --env "es6" --env "node" --parser-options "{ecmaVersion: 2018}" --rule "{space-infix-ops: 2}"
```
