import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Share2, ChevronLeft } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useCart } from '../contexts/CartContext'
import LoadingSpinner from '../components/LoadingSpinner'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  description: string
  category: string
  stock: number
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    if (id) {
      fetchProduct(id)
    }
  }, [id])

  const fetchProduct = async (productId: string) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single()

      if (error) throw error
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
      toast.error('Product not found')
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (!product) return
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
      })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-500 hover:text-blue-600">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wide">
              {product.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-600 ml-2">(4.5/5)</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>
          </div>

          {product.stock > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600">Available: {product.stock}</span>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
            </button>
            
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleShare}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Product Features</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Premium quality materials</li>
              <li>• 1-year manufacturer warranty</li>
              <li>• Free shipping on orders over $50</li>
              <li>• 30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Products */}
      <div className="mt-12">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>
      </div>
    </div>
  )
}