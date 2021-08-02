"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const account_model_1 = require("./account.model");
const sequelize_1 = require("@nestjs/sequelize");
const uuid_1 = require("uuid");
const bcrypt_1 = require("bcrypt");
let AccountsService = class AccountsService {
    constructor(accountModel) {
        this.accountModel = accountModel;
    }
    async createAccount(dto) {
        const account = await this.accountModel.create(dto);
        return Promise.resolve({ id: account.id, companyId: account.companyId, email: account.email });
    }
    async updateEmail(id, email) {
        const account = await this.accountModel.findByPk(id);
        account.email = email;
        return account.save();
    }
    async generatePassword(id) {
        const account = await this.accountModel.findByPk(id);
        const password = uuid_1.v1();
        const salt = await bcrypt_1.genSalt(10);
        account.passwordSalt = salt;
        account.passwordHash = bcrypt_1.hashSync(password, salt);
        await account.save();
        return password;
    }
    async getAccountById(id) {
        return this.accountModel.findByPk(id);
    }
    async getAccountByEmail(email) {
        return this.accountModel.findOne({
            where: {
                email
            }
        });
    }
};
AccountsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(account_model_1.AccountModel)),
    __metadata("design:paramtypes", [Object])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map