const base = import.meta.env.PUBLIC_API_BASE || '';

/**
 * PUBLIC_INTERFACE
 * getApiBase
 * Returns configured PUBLIC_API_BASE if present, or empty string when not set.
 * Do not hardcode URLs; rely on .env settings provided by the environment.
 */
export function getApiBase(): string {
  return typeof base === 'string' ? base : '';
}
