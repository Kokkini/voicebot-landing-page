export const config = {
  basePath: process.env.NODE_ENV === 'production' ? '/voicebot-landing-page' : ''
} as const;

export function getBaseUrl() {
  return config.basePath;
} 