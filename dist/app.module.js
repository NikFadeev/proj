"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const companies_module_1 = require("./companies/companies.module");
const company_model_1 = require("./companies/company.model");
const accounts_module_1 = require("./accounts/accounts.module");
const auth_module_1 = require("./auth/auth.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: !ENV ? ".env" : `.env.${ENV}`
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    dialect: "postgres",
                    host: configService.get("DB_HOST"),
                    port: parseInt(configService.get("DB_PORT")),
                    username: configService.get("DB_USER"),
                    password: configService.get("DB_PASSWORD"),
                    database: configService.get("DB_NAME"),
                    autoLoadModels: true,
                    synchronize: true,
                    ssl: true,
                    dialectOptions: (ENV === "production")
                        ? {
                            ssl: {
                                require: true,
                                rejectUnauthorized: false
                            }
                        }
                        : {},
                    models: [company_model_1.CompanyModel]
                }),
                inject: [config_1.ConfigService],
            }),
            companies_module_1.CompaniesModule,
            accounts_module_1.AccountsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map