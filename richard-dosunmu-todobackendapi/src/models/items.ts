import {Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize} from "sequelize";
import {setting} from "../config/config";

const config = setting.development;
let sequelize = new Sequelize(config.database as string, config.username as string, config.password, {dialect: "mysql", host: "127.0.0.1" });

export class Items extends Model<InferAttributes<Items>, InferCreationAttributes<Items>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare completed: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}
  
Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, 
    { sequelize, tableName: "Todo" }
);