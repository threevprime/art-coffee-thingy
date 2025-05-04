import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(request: NextRequest) {
        try {
                // Parse request body
                const body = await request.json();
                const { email, password } = body;

                // Validate request data
                if (!email || !password) {
                        return NextResponse.json(
                                { error: 'Email and password are required' },
                                { status: 400 }
                        );
                }

                // Sign in with Supabase
                const { data, error } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                });

                if (error) {
                        return NextResponse.json(
                                { error: error.message },
                                { status: 401 }
                        );
                }

                // Return user and session
                return NextResponse.json({
                        message: 'Login successful',
                        user: data.user,
                        session: data.session
                });
        } catch (error) {
                console.error('Login error:', error);
                return NextResponse.json(
                        { error: 'Authentication failed' },
                        { status: 500 }
                );
        }
}
