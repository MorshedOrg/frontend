import { useMutation } from '@tanstack/react-query'
import { login, register, sendOtp, verifyOtp } from './apis'

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

export function useRegister() {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: register,

    onError: (error) => {
      console.error('Mutaion Error', error)
    },
  })
}

export function useLogin() {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,

    onError: (error) => {
      console.error('Mutaion Error', error)
    },
  })
}
