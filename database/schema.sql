-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- 1. inquiries Table
-- ==========================================
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    country TEXT NOT NULL,
    product_required TEXT NOT NULL,
    quantity TEXT,
    certifications TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_inquiries_modtime
BEFORE UPDATE ON inquiries
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();


-- ==========================================
-- 2. quotations (RFQ) Table
-- ==========================================
CREATE TABLE IF NOT EXISTS quotations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    buyer_name TEXT NOT NULL,
    company TEXT NOT NULL,
    country TEXT NOT NULL,
    product TEXT NOT NULL,
    quantity TEXT NOT NULL,
    packaging_preference TEXT,
    delivery_timeline TEXT,
    destination_port TEXT,
    message TEXT,
    attached_file_url TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_quotations_modtime
BEFORE UPDATE ON quotations
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();


-- ==========================================
-- 3. products Table
-- ==========================================
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    origin TEXT,
    quality_standards TEXT,
    packaging TEXT,
    export_capacity TEXT,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_products_modtime
BEFORE UPDATE ON products
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

-- Enable Object Storage and Row Level Security on your Supabase dashboard manual steps later.
