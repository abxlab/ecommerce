/*
  # Create products table for ElectroStore

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `description` (text, product description)
      - `price` (numeric, product price)
      - `image_url` (text, product image URL)
      - `category` (text, product category)
      - `stock` (integer, available stock)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access to products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
('PlayStation 5', 'Next-generation gaming console with lightning-fast loading and stunning graphics. Experience immersive gaming like never before.', 499.99, 'https://images.pexels.com/photos/7915225/pexels-photo-7915225.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 15),
('Xbox Series X', 'The most powerful Xbox console ever built. Play thousands of games across four generations of Xbox.', 499.99, 'https://images.pexels.com/photos/6444020/pexels-photo-6444020.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 12),
('Meta Quest 3 VR Headset', 'Mixed reality VR headset with breakthrough technology. Step into new worlds and experiences.', 499.99, 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 8),
('Samsung 65" 4K Smart TV', 'Crystal clear 4K resolution with smart TV features. Transform your living room into an entertainment hub.', 899.99, 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 10),
('Sony WH-1000XM5 Headphones', 'Industry-leading noise canceling with exceptional sound quality. Perfect for music lovers and professionals.', 399.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 25),
('Bose SoundLink Revolve+', 'Portable Bluetooth speaker with 360-degree sound. Take your music anywhere with incredible audio quality.', 329.99, 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 18),
('Amazon Echo Dot (5th Gen)', 'Smart speaker with Alexa voice assistant. Control your smart home and get answers to your questions.', 49.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 30),
('Philips Hue Smart Bulbs (4-pack)', 'Color-changing smart light bulbs that sync with your life, music, and movies. Control with your voice or app.', 199.99, 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 20),
('Razer DeathAdder V3 Gaming Mouse', 'Ergonomic gaming mouse with precision tracking and customizable buttons. Dominate your competition.', 99.99, 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 35),
('Mechanical Gaming Keyboard RGB', 'Premium mechanical keyboard with RGB backlighting and tactile switches. Built for gamers and professionals.', 149.99, 'https://images.pexels.com/photos/163117/keyboard-computer-keys-wood-163117.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 22),
('Nintendo Switch OLED', 'Handheld gaming console with vibrant OLED screen. Play at home or on the go with stunning visuals.', 349.99, 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 16),
('JBL Charge 5 Portable Speaker', 'Waterproof portable speaker with powerful sound and long battery life. Perfect for outdoor adventures.', 179.99, 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 28);