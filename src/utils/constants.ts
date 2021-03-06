export enum HealthState {
    OK = 'OK',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    LOADING = 'LOADING',
    UNKNOWN = 'UNKNOWN',
    UPDATING = 'UPDATING',
    PROGRESS = 'PROGRESS',
    NOT_AVAILABLE = 'NOT_AVAILABLE',
};

export const ACM_THANOS_PROXY_ENDPOINT = "/api/proxy/namespace/open-cluster-management-observability/service/rbac-query-proxy:8443";
export const ACM_THANOS_QUERY_ENDPOINT = "/api/v1/query";
export const ACM_THANOS_QUERY_RANGE_ENDPOINT = "/api/v1/query_range";

export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;
export const ONE_HOUR = 60 * ONE_MINUTE;