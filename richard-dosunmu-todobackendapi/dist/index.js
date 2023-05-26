"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const items_1 = require("./models/items");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
(_a = items_1.Items.sequelize) === null || _a === void 0 ? void 0 : _a.sync({}).then(() => {
    console.log("Connected to the Database");
});
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
