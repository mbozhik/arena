import axios from 'axios'
import {apiUrl, API_CONFIG, ContactFormData, LoginData, RegistrationData, ApiResponse} from './api-config'

// Create axios instance with default config
const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Contact Form API
export const sendContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)

    const response = await apiClient.post(apiUrl(API_CONFIG.CONTACT), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return {
      success: true,
      message: 'Message sent successfully',
      data: response.data,
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Failed to send message',
    }
  }
}

// Login API
export const loginUser = async (data: LoginData): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post(apiUrl(API_CONFIG.LOGIN), data)

    const result = response.data

    // Handle login response codes
    if (result.login === 0) {
      return {
        success: false,
        message: 'Invalid email or password',
        login: 0,
      }
    } else if (result.login === 2) {
      return {
        success: false,
        message: 'Account is blocked',
        login: 2,
      }
    } else if (result.login === 1) {
      return {
        success: true,
        message: 'Login successful',
        data: result,
        login: 1,
      }
    }

    return {
      success: false,
      message: 'Unknown login response',
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Login failed',
    }
  }
}

// Registration API
export const registerUser = async (data: RegistrationData): Promise<ApiResponse> => {
  try {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const response = await apiClient.post(apiUrl(API_CONFIG.SEND_APPLY), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status === 200) {
      return {
        success: true,
        message: 'Registration successful',
      }
    } else if (response.status === 202) {
      return {
        success: false,
        message: 'User already exists',
      }
    } else {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Registration error:', error)
    if (axios.isAxiosError(error) && error.response?.status === 202) {
      return {
        success: false,
        message: 'User already exists',
      }
    }
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Registration failed',
    }
  }
}

// Banner API
export const getBannerImages = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(apiUrl(API_CONFIG.BANNER))

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('Banner API error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Failed to fetch banner images',
    }
  }
}

// Topbar/Courses API
export const getCoursesData = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(apiUrl(API_CONFIG.TOPBAR))

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('Courses API error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Failed to fetch courses data',
    }
  }
}

// Profile API
export const getProfileData = async (uid: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(`${apiUrl(API_CONFIG.PROFILE)}?reg_uuid=${uid}`)

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('Profile API error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Failed to fetch profile data',
    }
  }
}

// Payment History API
export const getPaymentHistory = async (uid: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(`${apiUrl(API_CONFIG.PAYMENT_HISTORY)}?reg_uuid=${uid}`)

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    console.error('Payment history API error:', error)
    return {
      success: false,
      message: axios.isAxiosError(error) ? error.response?.data?.message || error.message : 'Failed to fetch payment history',
    }
  }
}
