import { HttpHeaders } from '@angular/common/http';

export const CONTENT_TYPE = 'Content-Type';
export const ACCESS_ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
export const API_KEY = 'apiKey';
export const APPLICATION_JSON = 'application/json';
export const ASTERISK = '*';
export const API_KEY_NEORED = 'l7xx4065fddfd8044ef6aabbfd28ba8c5858';

export const PRINCIPAL_HEADER = new HttpHeaders()
.set(CONTENT_TYPE, APPLICATION_JSON)
.set(API_KEY, API_KEY_NEORED)
.set(ACCESS_ALLOW_ORIGIN, ASTERISK);
