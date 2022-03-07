import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) {}
    getHello(): string {
        const port = this.configService.get('PORT');
        const nodeEnv = this.configService.get('NODE_ENV', 'Default');
        const npmConfigProduction = this.configService.get('NPM_CONFIG_PRODUCTION', 'Default');
        return `PORT: ${port} - NODE_ENV: ${nodeEnv} - NPM_CONFIG_PRODUCTION: ${npmConfigProduction}`;
    }
}
