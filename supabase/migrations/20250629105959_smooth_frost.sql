/*
  # Add more products to each category

  1. New Products Added
    - Gaming: 10 total products (PlayStation 5, Xbox Series X, Nintendo Switch OLED, Meta Quest 3, Steam Deck, Gaming Chair, etc.)
    - Audio & Video: 10 total products (Samsung TV, Sony Headphones, Bose Speaker, JBL Speaker, Apple AirPods, etc.)
    - Smart Home: 10 total products (Echo Dot, Philips Hue, Ring Doorbell, Nest Thermostat, etc.)
    - Accessories: 10 total products (Gaming Mouse, Keyboard, Webcam, Monitor, etc.)

  2. Product Details
    - Each product includes realistic pricing, descriptions, and stock levels
    - High-quality product images from Pexels
    - Varied price ranges to appeal to different budgets
*/

-- Add more Gaming products
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
('Steam Deck 512GB', 'Portable gaming PC with SteamOS. Play your Steam library anywhere with console-quality controls and PC gaming power.', 649.99, 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 14),
('Gaming Chair Pro RGB', 'Ergonomic gaming chair with RGB lighting and premium leather. Built for long gaming sessions with maximum comfort.', 299.99, 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 8),
('ASUS ROG Gaming Laptop', '15.6" gaming laptop with RTX 4060, Intel i7, 16GB RAM. Dominate games with desktop-class performance on the go.', 1299.99, 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 6),
('Nintendo Switch Pro Controller', 'Premium wireless controller with HD rumble and motion controls. Enhanced precision for competitive gaming.', 69.99, 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 25),
('Gaming Headset 7.1 Surround', 'Professional gaming headset with 7.1 surround sound and noise-canceling microphone. Crystal clear communication.', 89.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 18),
('RGB Gaming Mousepad XXL', 'Extra large RGB mousepad with smooth surface and anti-slip base. Perfect for low and high DPI gaming.', 39.99, 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 40),
('PlayStation VR2 Headset', 'Next-gen VR gaming with 4K HDR, haptic feedback, and eye tracking. Experience games like never before.', 549.99, 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500', 'gaming', 10);

-- Add more Audio & Video products
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
('LG 77" OLED 4K TV', 'Premium OLED display with perfect blacks and infinite contrast. Cinema-quality viewing experience at home.', 2499.99, 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 5),
('Apple AirPods Pro 2nd Gen', 'Active noise cancellation with transparency mode. Personalized spatial audio for immersive listening.', 249.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 30),
('Sonos Arc Soundbar', 'Premium smart soundbar with Dolby Atmos. Transform your TV into a home theater experience.', 899.99, 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 12),
('Audio-Technica Turntable', 'Professional DJ turntable with direct drive and high-torque motor. Perfect for vinyl enthusiasts and DJs.', 449.99, 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 8),
('Marshall Acton III Speaker', 'Iconic design meets modern technology. Wireless speaker with classic Marshall amplification.', 279.99, 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 15),
('Sony A7 IV Camera', 'Full-frame mirrorless camera with 33MP sensor and 4K video. Professional photography and videography.', 2499.99, 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 7),
('Beats Studio3 Wireless', 'Over-ear headphones with pure adaptive noise canceling and Apple W1 chip for seamless connectivity.', 349.99, 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 20),
('Yamaha Soundbar YAS-209', 'Wireless subwoofer and Alexa built-in. DTS Virtual:X 3D surround sound for immersive audio.', 299.99, 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500', 'audio', 16);

-- Add more Smart Home products
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
('Ring Video Doorbell Pro 2', 'Advanced security with 1536p HD video, 3D motion detection, and two-way talk. Monitor your home 24/7.', 249.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 22),
('Google Nest Thermostat', 'Smart thermostat that learns your schedule and saves energy. Control from anywhere with the Nest app.', 129.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 18),
('Arlo Pro 4 Security Camera', 'Wire-free security camera with 2K video, color night vision, and 6-month battery life.', 199.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 14),
('August Smart Lock Pro', 'Keyless entry with smartphone control. Grant access remotely and track who comes and goes.', 279.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 12),
('Ecobee SmartThermostat', 'Voice control with Alexa built-in. Room sensors for balanced temperature throughout your home.', 249.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 10),
('TP-Link Kasa Smart Plugs', '4-pack of smart plugs with voice control and scheduling. Turn any device into a smart device.', 29.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 50),
('Nest Hub Max Smart Display', '10" smart display with camera for video calls, home control, and entertainment. Google Assistant built-in.', 229.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 15),
('Ring Alarm Security Kit', 'Complete home security system with professional monitoring options. Easy DIY installation.', 199.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'smart-home', 8);

-- Add more Accessories
INSERT INTO products (name, description, price, image_url, category, stock) VALUES
('Logitech MX Master 3S', 'Advanced wireless mouse with ultra-fast scrolling and app-specific customization. Perfect for productivity.', 99.99, 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 28),
('Dell UltraSharp 27" Monitor', '4K USB-C monitor with 99% sRGB color accuracy. Professional display for work and creativity.', 599.99, 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 12),
('Logitech C920s Webcam', 'Full HD 1080p webcam with privacy shutter. Crystal clear video calls and streaming.', 69.99, 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 35),
('Anker PowerCore 26800', 'High-capacity portable charger with fast charging. Keep all your devices powered on the go.', 65.99, 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 40),
('Blue Yeti USB Microphone', 'Professional USB microphone for streaming, podcasting, and recording. Studio-quality sound.', 99.99, 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 18),
('SteelSeries QcK Mousepad', 'Professional gaming mousepad with optimized surface for precise mouse tracking. Tournament-grade quality.', 14.99, 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 60),
('ASUS Dual Monitor Stand', 'Adjustable dual monitor arm for ergonomic workspace setup. Support monitors up to 27 inches.', 89.99, 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 15),
('Corsair K95 RGB Keyboard', 'Mechanical gaming keyboard with Cherry MX switches and per-key RGB lighting. Premium build quality.', 199.99, 'https://images.pexels.com/photos/163117/keyboard-computer-keys-wood-163117.jpeg?auto=compress&cs=tinysrgb&w=500', 'accessories', 20);