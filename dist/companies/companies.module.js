"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const accounts_module_1 = require("../accounts/accounts.module");
const core_module_1 = require("../core/core.module");
const companies_controller_1 = require("./companies.controller");
const companies_service_1 = require("./companies.service");
const company_model_1 = require("./company.model");
let CompaniesModule = class CompaniesModule {
};
CompaniesModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([company_model_1.CompanyModel]), core_module_1.CoreModule, accounts_module_1.AccountsModule],
        controllers: [companies_controller_1.CompaniesController],
        providers: [companies_service_1.CompaniesService]
    })
], CompaniesModule);
exports.CompaniesModule = CompaniesModule;
//# sourceMappingURL=companies.module.js.map