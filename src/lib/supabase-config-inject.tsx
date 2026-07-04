'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface SupabaseConfig {
  url: string;
  anonKey: string;
}

interface SupabaseConfigContextType {
  supabase: SupabaseClient | null;
  isLoading: boolean;
  error: string | null;
}

const SupabaseConfigContext = createContext<SupabaseConfigContextType>({
  supabase: null,
  isLoading: true,
  error: null,
});

export const SUPABASE_CONFIG_READY_EVENT = 'supabase-config-ready';

export function useSupabase() {
  return useContext(SupabaseConfigContext);
}

// Backward-compat alias
export function useSupabaseConfig() {
  return useContext(SupabaseConfigContext);
}

interface SupabaseConfigProviderProps {
  children: ReactNode;
}

export function SupabaseConfigProvider({ children }: SupabaseConfigProviderProps) {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/supabase-config')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data: SupabaseConfig) => {
        if (cancelled) return;
        if (data.url && data.anonKey) {
          const client = createClient(data.url, data.anonKey, {
            auth: { persistSession: true, autoRefreshToken: true },
          });
          (
            window as unknown as { __SUPABASE_CONFIG__?: SupabaseConfig }
          ).__SUPABASE_CONFIG__ = data;
          setSupabase(client);
          window.dispatchEvent(new CustomEvent(SUPABASE_CONFIG_READY_EVENT, { detail: data }));
        } else {
          throw new Error('Invalid config response');
        }
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setError(err.message);
        console.error('Failed to load Supabase config:', err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SupabaseConfigContext.Provider value={{ supabase, isLoading, error }}>
      {children}
    </SupabaseConfigContext.Provider>
  );
}
