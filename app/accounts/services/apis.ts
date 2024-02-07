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
