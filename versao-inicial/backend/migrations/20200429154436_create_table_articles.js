
exports.up = function(knex,Promises) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description',1000).notNull()
        table.string('imageUrl',1000)
        table.binary('content').notNull()
        table.integer('userId').unsigned().references('id').inTable('users').notNull()
        table.integer('categoryId').unsigned().references('id').inTable('categories').notNull()
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('articles')
};
