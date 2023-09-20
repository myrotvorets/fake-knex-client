import { Knex } from 'knex';

/**
 * `FakeClient` does not have any public properties;
 * Even though it really derives from `Client_MySQL`,
 * knex does not provide any tyope definitions for that class.
 * For the sake of simplicity, we just use `Knex.Client` here.
 */
export class FakeClient extends Knex.Client {}
