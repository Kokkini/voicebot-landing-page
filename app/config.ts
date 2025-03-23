export const config = {
  basePath: '/voicebot-landing-page'
} as const;

export function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  return config.basePath;
} 