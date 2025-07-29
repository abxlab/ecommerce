import React, { useState } from 'react'
import { setupDatabase } from '../utils/setupDatabase'
import { Database, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function SeedProducts() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; count?: number; error?: any; message?: string } | null>(null)

  const handleSetupDatabase = async () => {
    setLoading(true)
    setResult(null)
    
    try {
      const result = await setupDatabase()
      setResult(result)
    } catch (error) {
      setResult({ success: false, error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <Database className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Setup Database & Seed Products</h1>
          <p className="text-gray-600 mb-8">
            Click the button below to create the products table and populate your database with sample products across all categories.
          </p>
          
          <button
            onClick={handleSetupDatabase}
            disabled={loading}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
          >
            {loading ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Setting up Database...</span>
              </>
            ) : (
              <>
                <Database className="h-5 w-5" />
                <span>Setup Database & Seed Products</span>
              </>
            )}
          </button>

          {result && (
            <div className={`mt-6 p-4 rounded-lg ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center justify-center space-x-2">
                {result.success ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700">
                      {result.message || `Successfully seeded ${result.count} products!`}
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="text-red-700">
                      Error setting up database: {result.error?.message || 'Unknown error'}
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 text-left">
            <h3 className="text-lg font-semibold mb-4">What this will add:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-2">Gaming (10 products)</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• PlayStation 5, Xbox Series X</li>
                  <li>• Nintendo Switch, Steam Deck</li>
                  <li>• VR Headsets, Gaming Chairs</li>
                  <li>• Controllers, Headsets</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-2">Audio & Video (10 products)</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 4K TVs, OLED Displays</li>
                  <li>• Premium Headphones</li>
                  <li>• Soundbars, Speakers</li>
                  <li>• Professional Cameras</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-2">Smart Home (10 products)</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Smart Thermostats</li>
                  <li>• Security Cameras</li>
                  <li>• Smart Locks, Doorbells</li>
                  <li>• Voice Assistants</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-600 mb-2">Accessories (10 products)</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Gaming Mice, Keyboards</li>
                  <li>• Monitors, Webcams</li>
                  <li>• Power Banks, Cables</li>
                  <li>• Professional Equipment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-700 text-sm">
              <strong>Note:</strong> This will create the products table directly in your database and seed it with 40 products. 
              If you're still getting errors, make sure your Supabase connection is properly configured with the correct URL and API key.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}