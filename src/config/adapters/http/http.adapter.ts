export abstract class HttpAdapter {
  abstract get<T>(url: string, option?: Record<string, unknown>): Promise<T>;
}
