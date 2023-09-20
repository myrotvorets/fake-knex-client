# fake-knex-client

Fake Client for Knex.js

## Usage

```typescript
import * as knexpkg from 'knex';
import mockKnex from 'mock-knex';
import { FakeClient } from 'fake-knex-client';

describe('...', function () {
    let db: knexpkg.Knex;

    before(function () {
        const { knex } = knexpkg.default;
        db = knex({ client: FakeClient });
        mockKnex.mock(db);
    });

    // ...
});
```

## Why

We discovered that our integration tests, which involve a real database,
don't work smoothly alongside our functional tests that use `mock-knex`
with the actual database driver when we employ `mocha` as our test runner.
This issue likely arises because `mocha`, unlike `jest`, doesn't isolate each test,
resulting in some unexpected behavior.

One potential solution we considered was to utilize a distinct database driver
for functional tests, such as `better-sqlite3`. However, this approach
would introduce a significant and unnecessary dependency to our project.
