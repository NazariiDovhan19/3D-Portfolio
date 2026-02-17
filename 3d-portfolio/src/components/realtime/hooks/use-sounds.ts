import { useCallback, useEffect, useRef } from "react";
import { withBasePath } from "@/lib/base-path";

export const useSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);
  const startedRef = useRef(false);

  const ensureContext = () => {
    const AudioContextCtor = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCtor) return null;
    if (!audioContextRef.current) audioContextRef.current = new AudioContextCtor();
    return audioContextRef.current;
  };

  const decodeMp3 = async (url: string, ctx: AudioContext) => {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) throw new Error(`Failed to fetch ${url} (${res.status})`);
    const ab = await res.arrayBuffer();

    // Safari/Chrome інколи більш стабільно через promise-обгортку
    return await new Promise<AudioBuffer>((resolve, reject) => {
      ctx.decodeAudioData(ab, resolve, reject);
    });
  };

  const init = useCallback(async () => {
    if (startedRef.current) return;
    startedRef.current = true;

    try {
      const ctx = ensureContext();
      if (!ctx) return;

      try {
        pressBufferRef.current = await decodeMp3(withBasePath("/assets/keycap-sounds/press.mp3"), ctx);
      } catch (e) {
        console.error("Failed to decode press.mp3", e);
      }

      try {
        releaseBufferRef.current = await decodeMp3(withBasePath("/assets/keycap-sounds/release.mp3"), ctx);
      } catch (e) {
        console.error("Failed to decode release.mp3", e);
      }
    } catch (e) {
      console.error("Failed to init sounds", e);
    }
  }, []);

  // запускаємо ініціалізацію на першу взаємодію користувача
  useEffect(() => {
    const handler = () => {
      init();
      // після першого разу вже не треба слухати
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
    };

    window.addEventListener("pointerdown", handler, { passive: true });
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("pointerdown", handler);
      window.removeEventListener("keydown", handler);
      audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, [init]);

  const getContext = useCallback(() => {
    const ctx = ensureContext();
    if (!ctx) return null;
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }, []);

  const playTone = useCallback(
    (startFreq: number, endFreq: number, duration: number, vol: number) => {
      try {
        const ctx = getContext();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = "sine";
        const t0 = ctx.currentTime;

        oscillator.frequency.setValueAtTime(startFreq, t0);
        oscillator.frequency.exponentialRampToValueAtTime(endFreq, t0 + duration);

        gainNode.gain.setValueAtTime(0, t0);
        gainNode.gain.linearRampToValueAtTime(vol, t0 + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, t0 + duration);

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start(t0);
        oscillator.stop(t0 + duration);
      } catch (e) {
        console.error("Failed to play tone", e);
      }
    },
    [getContext]
  );

  const playSoundBuffer = useCallback(
    (buffer: AudioBuffer | null, baseDetune = 0) => {
      try {
        const ctx = getContext();
        if (!ctx || !buffer) return;

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.detune.value = baseDetune + Math.random() * 200 - 100;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.4;

        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);
      } catch (e) {
        console.error("Failed to play buffer", e);
      }
    },
    [getContext]
  );

  const playPressSound = useCallback(() => playSoundBuffer(pressBufferRef.current), [playSoundBuffer]);
  const playReleaseSound = useCallback(() => playSoundBuffer(releaseBufferRef.current), [playSoundBuffer]);

  const playSendSound = useCallback(() => playTone(600, 300, 0.25, 0.08), [playTone]);
  const playReceiveSound = useCallback(() => playTone(800, 400, 0.35, 0.1), [playTone]);

  return { playSendSound, playReceiveSound, playPressSound, playReleaseSound };
};
