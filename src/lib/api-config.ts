export const API_CONFIG = {
  // Base URLs
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  CROSS_LOGIN_URL: process.env.NEXT_PUBLIC_CROSS_LOGIN_URL,

  // Endpoints
  CONTACT: '/contacts',
  SEND_APPLY: '/api/form',
  LOGIN: '/v1/login',
  PROFILE: '/v1/profile',
  BANNER: '/api/image-list',
  TOPBAR: '/api/time-date',
  PAYMENT_HISTORY: '/api/t-list',

  // External Services
  BKASH_SCRIPT: process.env.NEXT_PUBLIC_BKASH_SCRIPT_URL,

  // Analytics
  GTM_ID: 'GTM-N4882C6H',
  FACEBOOK_PIXEL_ID: '492878632265213',
}

// Helper function to build full API URL
export const apiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`
}

// API Response Types
export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface LoginData {
  email: string
  password: string
}

export interface RegistrationData {
  name: string
  email: string
  phone: string
  course: string
}

export interface ApiResponse {
  success: boolean
  message?: string
  data?: any
  login?: 0 | 1 | 2
}
