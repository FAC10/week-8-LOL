# Learnings

## Continuous Integration

### Travis Config

```yaml
language: node_js
node_js:
  - "6.9.5"
# This bit creates a new database called 'lmao-test' every time Travis runs
before_script:
  # Create the actual database and user
  - "psql -c 'create database lmao_test;' -U postgres"
  # Run the build script on the new database as the new user
  - "psql -U postgres -d lmao_test -a -f database/db_build.sql"
script:
  # Gets Travis to run our tests and generate coverage data
  - "npm run coverage"
after_success:
  # This sends the Istanbul coverage data to Codecov
  - ./node_modules/.bin/codecov -e TRAVIS_NODE_VERSION -f coverage/coverage.json
```

### Travis Database

Set two `before_script`s in our Travis config to create a new Postgres database every time it runs our tests.

We also need to specify our `DATABASE_URL` environment variable in Travis' settings (on the website). This is in the standard format: `postgres://postgres:@localhost/lmao_test`
