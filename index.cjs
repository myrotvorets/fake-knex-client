const Client_MySQL = require('knex/lib/dialects/mysql');

/**
 * @internal
 */
class Connection {
    /**
     * @returns {Promise<void>}
     */
    async close() {
        // Do nothing
    }
}

class FakeClient extends Client_MySQL {
    driverName = 'fake';

    /**
     * @returns {object}
     * @access protected
     */
    _driver() {
        return {};
    }

    /**
     * @returns {Promise<Connection>}
     * @access protected
     */
    acquireRawConnection() {
        return Promise.resolve(new Connection());
    }

    /**
     * @param {Connection} connection
     * @returns {Promise<void>}
     * @access protected
     */
    destroyRawConnection(connection) {
        return connection.close();
    }
}

module.exports = { FakeClient };
