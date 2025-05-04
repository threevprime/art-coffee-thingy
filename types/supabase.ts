export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            artworks: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    description: string | null
                    artist_id: string
                    image_url: string
                    price: number | null
                    sold: boolean
                    category: string | null
                    medium: string | null
                    dimensions: string | null
                    year_created: number | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    description?: string | null
                    artist_id: string
                    image_url: string
                    price?: number | null
                    sold?: boolean
                    category?: string | null
                    medium?: string | null
                    dimensions?: string | null
                    year_created?: number | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    description?: string | null
                    artist_id?: string
                    image_url?: string
                    price?: number | null
                    sold?: boolean
                    category?: string | null
                    medium?: string | null
                    dimensions?: string | null
                    year_created?: number | null
                }
            }
            profiles: {
                Row: {
                    id: string
                    updated_at: string | null
                    username: string | null
                    full_name: string | null
                    avatar_url: string | null
                    bio: string | null
                    is_artist: boolean
                }
                Insert: {
                    id: string
                    updated_at?: string | null
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    is_artist?: boolean
                }
                Update: {
                    id?: string
                    updated_at?: string | null
                    username?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    bio?: string | null
                    is_artist?: boolean
                }
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
    }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Insertable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type Updatable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']