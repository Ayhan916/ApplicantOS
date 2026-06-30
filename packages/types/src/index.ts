export type ServiceStatus = "ok" | "ready" | "degraded";

export interface HealthResponse {
  status: ServiceStatus;
}
