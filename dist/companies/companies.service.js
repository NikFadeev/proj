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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const core_service_1 = require("../core/core.service");
const company_model_1 = require("./company.model");
let CompaniesService = class CompaniesService {
    constructor(companyModel, coreService) {
        this.companyModel = companyModel;
        this.coreService = coreService;
    }
    async getAll() {
        const coreCompanies = await this.coreService.getCompanies();
        const companies = await this.companyModel.findAll();
        return coreCompanies.map((company) => {
            const com = companies.find((c) => c.id === company.id);
            if (com) {
                return Object.assign(Object.assign({}, company), { status: com.status });
            }
            else {
                return Object.assign(Object.assign({}, company), { status: company_model_1.CompanyStatus.None });
            }
        });
    }
    async getCompanyById(id) {
        return this.companyModel.findByPk(id);
    }
    async createCompany(dto) {
        return this.companyModel.create(dto);
    }
    async updateStatus(id, status) {
        const company = await this.companyModel.findByPk(id);
        company.status = status;
        return company.save();
    }
};
CompaniesService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(company_model_1.CompanyModel)),
    __metadata("design:paramtypes", [Object, core_service_1.CoreService])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map