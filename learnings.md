# Learnings

## Continuous Integration

### Travis Config

```yaml
language: node_js
node_js:
  - "6.9.5"
# This bit creates a new database called 'lmao-test' every time Travis runs
before_script:
  - "psql -c 'create database lmao_test;' -U postgres"
script:
  - "npm run coverage"
# This sends the Istanbul coverage data to Codecov
after_success:
  - ./node_modules/.bin/codecov -e TRAVIS_NODE_VERSION -f coverage/coverage.json
```

### Travis Database

Set `before_script` in our Travis config to create a new Postgres database every time it runs our tests.

We also need to specify our `DATABASE_URL` environment variable in Travis' settings (on the website). This is in the standard format: `postgres://postgres:@localhost/lmao_test`
