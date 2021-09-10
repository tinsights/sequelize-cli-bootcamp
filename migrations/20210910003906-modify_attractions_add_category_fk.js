module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    await queryInterface.addColumn(
      'attractions', // table name
      'category_id', // new field name
      {
        type: Sequelize.INTEGER,
        // This links the category_id column to the id column in the attractions table
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
