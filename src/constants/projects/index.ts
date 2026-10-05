import { Project } from '@/types/project';
import { agentBankingPlatform } from './agent-banking-platform';
import { enterpriseIntegrationPlatform } from './enterprise-integration-platform';
import { paymentGatewayPlatform } from './payment-gateway-platform';
import { developerPortfolio } from './developer-portfolio';
import { cleanSlateAI } from './clean-slate-ai';

export const projects: Project[] = [
  paymentGatewayPlatform,
  enterpriseIntegrationPlatform,
  agentBankingPlatform,
  developerPortfolio,
  cleanSlateAI,
];
