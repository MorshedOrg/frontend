import axios from 'axios'

const instance = axios.create({ baseURL: 'base url' })

export async function sendOtp(payload: { phone: string }) {
  type SendOtpApi = {
    data: {
      otpSession: string
    }
  }

  const { data } = await instance.post<SendOtpApi>('/v1/auth/send-otp', {
    phoneNumber: payload.phone,
  })

  console.log('data', data)

  return data.data
}

export async function verifyOtp(payload: {
  otpCode: string
  otpSession: string
}) {
  const { data } = await instance.post('/v1/auth/verify-otp', {
    otpCode: payload.otpCode,
    otpSession: payload.otpSession,
  })

  return data.data
}

export async function register(payload: {
  otpSession: string
  username: string
  firstName: string
  lastName: string
  password: string
}) {
  const { data } = await instance.post('/v1/auth/sign-up', {
    username: payload.username,
    firstName: payload.firstName,
    lastName: payload.lastName,
    password: payload.password,
    otpSession: payload.otpSession,
  })

  return data.data
}

export async function login(payload: { phone: string; password: string }) {
  type LoginApi = {
    data: {
      accessToken: string
      refreshToken: string
    }
  }

  const { data } = await instance.post<LoginApi>('v1/auth/sign-in', {
    phoneNumber: payload.phone,
    password: payload.password,
  })

  return data.data
}
