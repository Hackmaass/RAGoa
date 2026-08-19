/**
 * API Service Interface
 *
 * Clean abstraction layer for backend communication.
 * Swap `mockApi` for the real implementation when the backend is ready.
 */

import type {
  RAGResponse,
  SystemStatusData,
  PipelineMetrics,
} from '../types/index.ts';

export interface APIService {
  /** Transcribe audio blob to text via STT */
  transcribeAudio(audioBlob: Blob): Promise<string>;

  /** Send a text query to the RAG pipeline and get a full response */
  queryRAG(query: string): Promise<RAGResponse>;

  /** Check system health */
  getSystemStatus(): Promise<SystemStatusData>;

  /** Get aggregate pipeline metrics (percentiles etc.) */
  getPipelineMetrics(): Promise<PipelineMetrics>;
}

// -----------------------------------------------------------------
// Export the mock implementation as the default for now.
// When the backend is ready, swap this single import.
// -----------------------------------------------------------------
export { mockAPI as api } from './mockApi.ts';
