export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          created_at: string | null
          id: number
          location: string
          name: string
          time: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          location: string
          name: string
          time: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: number
          location?: string
          name?: string
          time?: string
          type?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          channel_id: string
          created_at: string | null
          deleted: boolean
          flagged_for_deletion: boolean
          id: number
          message_id: string
          time: string
        }
        Insert: {
          channel_id: string
          created_at?: string | null
          deleted?: boolean
          flagged_for_deletion?: boolean
          id?: number
          message_id: string
          time: string
        }
        Update: {
          channel_id?: string
          created_at?: string | null
          deleted?: boolean
          flagged_for_deletion?: boolean
          id?: number
          message_id?: string
          time?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          auto_delete: boolean
          boss_role: string | null
          channel_id: string
          created_at: string | null
          event_role: string | null
          guild_id: string
          helltide: boolean
          helltide_images: boolean
          helltide_role: string | null
          id: number
          role: string | null
          worldboss: boolean
          zone_and_boss_images: boolean
          zoneevent: boolean
        }
        Insert: {
          auto_delete?: boolean
          boss_role?: string | null
          channel_id: string
          created_at?: string | null
          event_role?: string | null
          guild_id: string
          helltide?: boolean
          helltide_images?: boolean
          helltide_role?: string | null
          id?: number
          role?: string | null
          worldboss?: boolean
          zone_and_boss_images?: boolean
          zoneevent?: boolean
        }
        Update: {
          auto_delete?: boolean
          boss_role?: string | null
          channel_id?: string
          created_at?: string | null
          event_role?: string | null
          guild_id?: string
          helltide?: boolean
          helltide_images?: boolean
          helltide_role?: string | null
          id?: number
          role?: string | null
          worldboss?: boolean
          zone_and_boss_images?: boolean
          zoneevent?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
