
exports.up = function (knex) {
    return knex.schema.alterTable('users', (table) => {
        table.datetime('deleteAt')
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('users', (table) => {
        table.dropColumn('deleteAt')
    })
};
