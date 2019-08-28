
exports.up = function(knex, Promise) {
    //Fields: VIN*, make*, model*, mileage*, transmission and title
    return knex.schema.createTable('cars', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field to store the VIN. Should be unique.
      tbl.text('VIN', 128).unique().notNullable();
      // creates a textfield to store the make
      tbl.text('make', 128).notNullable();
      // creates a textfield to store the model
      tbl.text('model', 128).notNullable();
      // mileage; required
      tbl.decimal('mileage').notNullable();
      // the type of transmission
      tbl.text('transmission', 128);
      // the state of the title
      tbl.text('title', 128);
    });
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists('cars');
};
