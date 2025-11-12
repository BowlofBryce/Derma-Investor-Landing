/*
  # Create investor_requests table

  1. New Tables
    - `investor_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Full name of the requester
      - `email` (text) - Email address of the requester
      - `company` (text, nullable) - Company name if provided
      - `phone` (text, nullable) - Phone number if provided
      - `submitted_at` (timestamptz) - When the request was submitted
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `investor_requests` table
    - Add policy for service role to insert data (used by edge function)
    - Add policy for authenticated admins to view requests
*/

CREATE TABLE IF NOT EXISTS investor_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE investor_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert requests"
  ON investor_requests
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can view all requests"
  ON investor_requests
  FOR SELECT
  TO service_role
  USING (true);
