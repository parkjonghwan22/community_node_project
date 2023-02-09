module.exports = (sequelize, Sequelize) => {
    class Comments extends Sequelize.Model {
        static initialize() {
            return this.init(config, settings)
        }

    }

    const config = {
        commentidx: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        content: {
            type: Sequelize.TEXT,
            allowNull: false,
        },

        depth: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

        group: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    }

    const settings = {
        sequelize,
    }

    Comments.initialize()

}