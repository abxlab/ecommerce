import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          image_url: string
          category: string
          stock: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          image_url: string
          category: string
          stock: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string
          category?: string
          stock?: number
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          total: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total?: number
          status?: string
          created_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          price: number
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price?: number
        }
      }
    }
  }
}