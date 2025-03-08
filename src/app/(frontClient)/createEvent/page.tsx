"use client"

import React from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import FormEvent from '@/components/form-event'

export default function CreateEvent() {
  const { isLoaded, userId } = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (isLoaded && !userId) {
      router.push('/sign-in')
    }
  }, [isLoaded, userId, router])

  if (!isLoaded || !userId) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <FormEvent />
    </div>
  )
}