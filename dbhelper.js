//var mysql = require('mysql');

var DBHelper = {
    /*connection: mysql.createConnection({
        host: '69.167.191.21',
        user: 'rajat@69.167.191.21',
        password: 'rs@13934',
        database: 'techorac_rsblog'
    }),

    connect: function () {
        DBHelper.connection.connect();
    },

    disconnect: function () {
        DBHelper.connection.destroy()
    },

    query: function (sql, callback) {
        DBHelper.connect();
        DBHelper.connection.query(sql, function (err, rows, fields) {
            if (err) {
                callback(err);
            }
            DBHelper.disconnect();
            console.log(rows);
            console.log(fields);
        });
    }*/
};

module.exports = DBHelper;