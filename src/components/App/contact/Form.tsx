'use client'

import {BUTTON} from '~/UI/Button'

import {cn} from '@/lib/utils'
import {sendContactForm} from '@/lib/api'

import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {P, TYPO} from '~/UI/Typography'

export type FormFields = {
  name: string
  email: string
  message: string
}

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormFields>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Send Message')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true)
    setShowSuccess(false)
    setShowError(false)

    try {
      const response = await sendContactForm(data)

      if (response.success) {
        setButtonText('Message Sent!')
        setShowSuccess(true)
        reset()

        setTimeout(() => {
          setButtonText('Send Message')
        }, 3000)
      } else {
        setErrorMessage(response.message || 'Failed to send message')
        setShowError(true)
        setButtonText('Try Again')

        setTimeout(() => {
          setButtonText('Send Message')
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage('Network error. Please try again.')
      setShowError(true)
      setButtonText('Try Again')

      setTimeout(() => {
        setButtonText('Send Message')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = cn('block w-full px-6 py-4 sm:px-5', TYPO.p, 'bg-white-purple text-purple-border placeholder:text-purple-border font-normal rounded-3xl sm:rounded-2xl', '!outline-none duration-200 hover:border-background focus-visible:border-background')

  return (
    <form className="flex flex-col justify-between sm:gap-6" onSubmit={handleSubmit(onSubmit)}>
      <P className="hidden sm:block">Contact us below</P>

      <div className="flex flex-col h-full gap-4 sm:gap-3">
        <div>
          <input type="text" className={cn(inputClasses, errors.name && 'border-[#FF2121]')} placeholder="Name" {...register('name', {required: 'Name is required'})} />
          {errors.name && <p className="text-[#FF2121] text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input type="email" className={cn(inputClasses, errors.email && 'border-[#FF2121]')} placeholder="Email" {...register('email', {required: 'Email is required'})} />
          {errors.email && <p className="text-[#FF2121] text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="flex-1">
          <textarea className={cn(inputClasses, 'h-full', errors.message && 'border-[#FF2121]')} placeholder="Message" {...register('message', {required: 'Message is required'})} rows={3} />
          {errors.message && <p className="text-[#FF2121] text-sm mt-1">{errors.message.message}</p>}
        </div>

        {showSuccess && (
          <div className="p-4 bg-white-purple border border-purple-highlight text-purple-border rounded-lg">
            <p className="text-sm">Message sent successfully! We'll get back to you soon.</p>
          </div>
        )}

        {showError && (
          <div className="p-4 bg-white-purple border border-[#FF2121] text-[#FF2121] rounded-lg">
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <button type="submit" disabled={isSubmitting} className={cn([BUTTON.base, BUTTON.primary], 'w-full uppercase', isSubmitting && 'text-foreground/60')}>
          {buttonText}
        </button>
      </div>
    </form>
  )
}
