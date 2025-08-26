'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-none z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-700 text-sm">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
              Bitte überprüfen und verwalten Sie Ihre Präferenzen unten.{' '}
              <Link href="/privacy-policy" className="text-brand-primary hover:underline">
                Datenschutzrichtlinie
              </Link>{' '}
              und{' '}
              <Link href="/cookie-policy" className="text-brand-primary hover:underline">
                Cookie-Richtlinie
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-none"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors text-sm font-medium shadow-none"
            >
              Alle Cookies akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
