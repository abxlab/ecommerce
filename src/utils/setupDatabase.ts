import { supabase } from '../lib/supabase'

export async function setupDatabase() {
  try {
    console.log('Setting up database...')
    
    // Check if products table exists and has data
    const { data: existingProducts, error: checkError } = await supabase
      .from('products')
      .select('id')
      .limit(1)
    
    if (checkError) {
      console.error('Error checking products table:', checkError)
      throw checkError
    }
    
    if (existingProducts && existingProducts.length > 0) {
      console.log('Products already exist in database')
      return { success: true, message: 'Products already exist' }
    }
    
    // If no products exist, seed them
    const result = await seedProducts()
    return result
    
  } catch (error) {
    console.error('Error setting up database:', error)
    return { success: false, error }
  }
}

const products = [
  // Gaming Products
  {
    name: 'PlayStation 5',
    description: 'Next-generation gaming console with lightning-fast loading and stunning graphics. Experience immersive gaming like never before.',
    price: 499.99,
    image_url: 'https://images.pexels.com/photos/7915225/pexels-photo-7915225.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 15
  },
  {
    name: 'Xbox Series X',
    description: 'The most powerful Xbox console ever built. Play thousands of games across four generations of Xbox.',
    price: 499.99,
    image_url: 'https://images.pexels.com/photos/6444020/pexels-photo-6444020.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 12
  },
  {
    name: 'Nintendo Switch OLED',
    description: 'Handheld gaming console with vibrant OLED screen. Play at home or on the go with stunning visuals.',
    price: 349.99,
    image_url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 16
  },
  {
    name: 'Meta Quest 3 VR Headset',
    description: 'Mixed reality VR headset with breakthrough technology. Step into new worlds and experiences.',
    price: 499.99,
    image_url: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 8
  },
  {
    name: 'Steam Deck 512GB',
    description: 'Portable gaming PC with SteamOS. Play your Steam library anywhere with console-quality controls.',
    price: 649.99,
    image_url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 14
  },
  {
    name: 'Gaming Chair Pro RGB',
    description: 'Ergonomic gaming chair with RGB lighting and premium leather. Built for long gaming sessions.',
    price: 299.99,
    image_url: 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 8
  },
  {
    name: 'ASUS ROG Gaming Laptop',
    description: '15.6" gaming laptop with RTX 4060, Intel i7, 16GB RAM. Desktop-class performance on the go.',
    price: 1299.99,
    image_url: 'https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 6
  },
  {
    name: 'Nintendo Switch Pro Controller',
    description: 'Premium wireless controller with HD rumble and motion controls. Enhanced precision for gaming.',
    price: 69.99,
    image_url: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 25
  },
  {
    name: 'Gaming Headset 7.1 Surround',
    description: 'Professional gaming headset with 7.1 surround sound and noise-canceling microphone.',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 18
  },
  {
    name: 'PlayStation VR2 Headset',
    description: 'Next-gen VR gaming with 4K HDR, haptic feedback, and eye tracking. Experience games like never before.',
    price: 549.99,
    image_url: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'gaming',
    stock: 10
  },

  // Audio & Video Products
  {
    name: 'Samsung 65" 4K Smart TV',
    description: 'Crystal clear 4K resolution with smart TV features. Transform your living room into an entertainment hub.',
    price: 899.99,
    image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 10
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling with exceptional sound quality. Perfect for music lovers.',
    price: 399.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 25
  },
  {
    name: 'Bose SoundLink Revolve+',
    description: 'Portable Bluetooth speaker with 360-degree sound. Take your music anywhere.',
    price: 329.99,
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 18
  },
  {
    name: 'JBL Charge 5 Portable Speaker',
    description: 'Waterproof portable speaker with powerful sound and long battery life. Perfect for outdoor adventures.',
    price: 179.99,
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 28
  },
  {
    name: 'LG 77" OLED 4K TV',
    description: 'Premium OLED display with perfect blacks and infinite contrast. Cinema-quality viewing experience.',
    price: 2499.99,
    image_url: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 5
  },
  {
    name: 'Apple AirPods Pro 2nd Gen',
    description: 'Active noise cancellation with transparency mode. Personalized spatial audio for immersive listening.',
    price: 249.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 30
  },
  {
    name: 'Sonos Arc Soundbar',
    description: 'Premium smart soundbar with Dolby Atmos. Transform your TV into a home theater experience.',
    price: 899.99,
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 12
  },
  {
    name: 'Sony A7 IV Camera',
    description: 'Full-frame mirrorless camera with 33MP sensor and 4K video. Professional photography and videography.',
    price: 2499.99,
    image_url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 7
  },
  {
    name: 'Marshall Acton III Speaker',
    description: 'Iconic design meets modern technology. Wireless speaker with classic Marshall amplification.',
    price: 279.99,
    image_url: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 15
  },
  {
    name: 'Beats Studio3 Wireless',
    description: 'Over-ear headphones with pure adaptive noise canceling and Apple W1 chip for seamless connectivity.',
    price: 349.99,
    image_url: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'audio',
    stock: 20
  },

  // Smart Home Products
  {
    name: 'Amazon Echo Dot (5th Gen)',
    description: 'Smart speaker with Alexa voice assistant. Control your smart home and get answers to your questions.',
    price: 49.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 30
  },
  {
    name: 'Philips Hue Smart Bulbs (4-pack)',
    description: 'Color-changing smart light bulbs that sync with your life, music, and movies. Control with your voice or app.',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 20
  },
  {
    name: 'Ring Video Doorbell Pro 2',
    description: 'Advanced security with 1536p HD video, 3D motion detection, and two-way talk. Monitor your home 24/7.',
    price: 249.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 22
  },
  {
    name: 'Google Nest Thermostat',
    description: 'Smart thermostat that learns your schedule and saves energy. Control from anywhere with the Nest app.',
    price: 129.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 18
  },
  {
    name: 'Arlo Pro 4 Security Camera',
    description: 'Wire-free security camera with 2K video, color night vision, and 6-month battery life.',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 14
  },
  {
    name: 'August Smart Lock Pro',
    description: 'Keyless entry with smartphone control. Grant access remotely and track who comes and goes.',
    price: 279.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 12
  },
  {
    name: 'TP-Link Kasa Smart Plugs',
    description: '4-pack of smart plugs with voice control and scheduling. Turn any device into a smart device.',
    price: 29.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 50
  },
  {
    name: 'Nest Hub Max Smart Display',
    description: '10" smart display with camera for video calls, home control, and entertainment. Google Assistant built-in.',
    price: 229.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 15
  },
  {
    name: 'Ecobee SmartThermostat',
    description: 'Voice control with Alexa built-in. Room sensors for balanced temperature throughout your home.',
    price: 249.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 10
  },
  {
    name: 'Ring Alarm Security Kit',
    description: 'Complete home security system with professional monitoring options. Easy DIY installation.',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'smart-home',
    stock: 8
  },

  // Accessories
  {
    name: 'Razer DeathAdder V3 Gaming Mouse',
    description: 'Ergonomic gaming mouse with precision tracking and customizable buttons. Dominate your competition.',
    price: 99.99,
    image_url: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 35
  },
  {
    name: 'Mechanical Gaming Keyboard RGB',
    description: 'Premium mechanical keyboard with RGB backlighting and tactile switches. Built for gamers and professionals.',
    price: 149.99,
    image_url: 'https://images.pexels.com/photos/163117/keyboard-computer-keys-wood-163117.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 22
  },
  {
    name: 'Logitech MX Master 3S',
    description: 'Advanced wireless mouse with ultra-fast scrolling and app-specific customization. Perfect for productivity.',
    price: 99.99,
    image_url: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 28
  },
  {
    name: 'Dell UltraSharp 27" Monitor',
    description: '4K USB-C monitor with 99% sRGB color accuracy. Professional display for work and creativity.',
    price: 599.99,
    image_url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 12
  },
  {
    name: 'Logitech C920s Webcam',
    description: 'Full HD 1080p webcam with privacy shutter. Crystal clear video calls and streaming.',
    price: 69.99,
    image_url: 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 35
  },
  {
    name: 'Anker PowerCore 26800',
    description: 'High-capacity portable charger with fast charging. Keep all your devices powered on the go.',
    price: 65.99,
    image_url: 'https://images.pexels.com/photos/4790277/pexels-photo-4790277.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 40
  },
  {
    name: 'Blue Yeti USB Microphone',
    description: 'Professional USB microphone for streaming, podcasting, and recording. Studio-quality sound.',
    price: 99.99,
    image_url: 'https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 18
  },
  {
    name: 'SteelSeries QcK Mousepad',
    description: 'Professional gaming mousepad with optimized surface for precise mouse tracking. Tournament-grade quality.',
    price: 14.99,
    image_url: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 60
  },
  {
    name: 'ASUS Dual Monitor Stand',
    description: 'Adjustable dual monitor arm for ergonomic workspace setup. Support monitors up to 27 inches.',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 15
  },
  {
    name: 'Corsair K95 RGB Keyboard',
    description: 'Mechanical gaming keyboard with Cherry MX switches and per-key RGB lighting. Premium build quality.',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/163117/keyboard-computer-keys-wood-163117.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'accessories',
    stock: 20
  }
]

async function seedProducts() {
  try {
    console.log('Starting to seed products...')
    
    // Insert products in batches to avoid overwhelming the database
    const batchSize = 10
    let totalInserted = 0
    
    for (let i = 0; i < products.length; i += batchSize) {
      const batch = products.slice(i, i + batchSize)
      
      const { data, error } = await supabase
        .from('products')
        .insert(batch)
        .select()
      
      if (error) {
        console.error('Error inserting batch:', error)
        throw error
      }
      
      totalInserted += data?.length || 0
      console.log(`Inserted batch ${Math.floor(i / batchSize) + 1}:`, data?.length, 'products')
    }
    
    console.log('Successfully seeded all products!')
    return { success: true, count: totalInserted }
  } catch (error) {
    console.error('Error seeding products:', error)
    return { success: false, error }
  }
}