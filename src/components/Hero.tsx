import { motion } from 'framer-motion';
import { VoiceInterface } from './VoiceInterface.tsx';
import { Transcript } from './Transcript.tsx';
import { ProcessingPipeline } from './ProcessingPipeline.tsx';
import { AppState } from '../types/index.ts';
import type { AudioVisualizerHook } from '../hooks/useAudioVisualizer.ts';

interface HeroProps {
  state: AppState;
  transcript: string;
  audio: AudioVisualizerHook;
  onStartListening: () => void;
  onStopListening: (audioBlob: Blob) => void;
  onError: (type: 'mic_permission', message: string) => void;
}

export function Hero({
  state,
  transcript,
  audio,
  onStartListening,
  onStopListening,
  onError,
}: HeroProps) {
  const showHeadline = state === AppState.IDLE;

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-20 pb-12">
      {/* Subtle radial glow behind content */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,212,0,0.02) 0%, transparent 70%)',
        }}
      />

      {/* Headline — visible in IDLE, fades when active */}
      <motion.div
        className="mb-12 text-center"
        animate={{
          opacity: showHeadline ? 1 : 0,
          y: showHeadline ? 0 : -20,
          height: showHeadline ? 'auto' : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl md:text-5xl"
        >
          Ask the knowledge base.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm text-text-secondary md:text-base"
        >
          Speak naturally. Get grounded answers.
        </motion.p>
      </motion.div>

      {/* Voice Interface */}
      <VoiceInterface
        state={state}
        audio={audio}
        onStartListening={onStartListening}
        onStopListening={onStopListening}
        onError={onError}
      />

      {/* Technical descriptor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] text-text-tertiary">
          VOICE-ENABLED RETRIEVAL AUGMENTED GENERATION
        </span>
      </motion.div>

      {/* Transcript */}
      <Transcript state={state} text={transcript} />

      {/* Processing Pipeline */}
      <ProcessingPipeline state={state} />
    </section>
  );
}
