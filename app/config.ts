export const config = {
  basePath: '/voicebot-landing-page'
} as const;

export function getBaseUrl() {
  return config.basePath;
} 