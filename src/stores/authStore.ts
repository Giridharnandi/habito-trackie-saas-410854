import { create } from 'zustand'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

type AuthStore = {
  session: Session | null
  initializeAuth: () => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  initializeAuth: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    set({ session })

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ session })
    })
  },
  signOut: async () => {
    await supabase.auth.signOut()
    set({ session: null })
  }
}))