import { Project } from '@/types/project';
import { agentBankingPlatform } from './agent-banking-platform';
import { enterpriseIntegrationPlatform } from './enterprise-integration-platform';
import { paymentGatewayPlatform } from './payment-gateway-platform';
import { developerPortfolio } from './developer-portfolio';

export const projects: Project[] = [
  paymentGatewayPlatform,
  enterpriseIntegrationPlatform,
  agentBankingPlatform,
  developerPortfolio,
];
