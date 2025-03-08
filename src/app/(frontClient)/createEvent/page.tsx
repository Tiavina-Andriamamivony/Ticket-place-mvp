"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
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
    return <div className='w-full h-screen flex justify-center items-center '>  <FontAwesomeIcon icon={faSpinner} size='5x' className='animate-spin'/></div>
  }

  return (
    <div>
      <FormEvent />
    </div>
  )
}