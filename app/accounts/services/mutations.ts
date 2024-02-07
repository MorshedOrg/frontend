import { sendOtp, verifyOtp } from './apis'
import { useMutation } from '@tanstack/react-query'

export function useSendOtp() {
  return useMutation({
    mutationKey: ['send-otp'],
    mutationFn: sendOtp,

    onError: (error) => {
      console.error('Mutaion Error', error)
    },
  })
}

export function useVerifyOtp() {
  return useMutation({
    mutationKey: ['verify-otp'],
    mutationFn: verifyOtp,

    onError: (error) => {
      console.error('Mutaion Error', error)
    },
  })
}
