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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("./accounts.service");
const mail_service_1 = require("../mail/mail.service");
let AccountsController = class AccountsController {
    constructor(accountsService, mailService) {
        this.accountsService = accountsService;
        this.mailService = mailService;
    }
    async updateEmail(id, dto) {
        return this.accountsService.updateEmail(id, dto.email);
    }
    async generatePassword(id) {
        const pass = await this.accountsService.generatePassword(id);
        const account = await this.accountsService.getAccountById(id);
        if (account.email) {
            this.mailService.sendEmail(account.email, pass);
        }
    }
    async findAccount(id) {
        return this.accountsService.getAccountById(id);
    }
};
__decorate([
    common_1.Patch('/updateEmail/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "updateEmail", null);
__decorate([
    common_1.Post('/generatePassword/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "generatePassword", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "findAccount", null);
AccountsController = __decorate([
    common_1.Controller('accounts'),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService,
        mail_service_1.default])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map