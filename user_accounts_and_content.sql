CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    profile_picture TEXT, -- Profile picture
    biography TEXT,
    skills TEXT[], -- Helps link users for project collaboration via algorithms
    password_hash TEXT NOT NULL,
    preferences JSONB DEFAULT '{}'::JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);