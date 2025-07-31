'use client'

import {BUTTON} from '~/UI/Button'

import {cn} from '@/lib/utils'

import {useState} from 'react'
import {useForm} from 'react-hook-form'

import {P, TYPO} from '~/UI/Typography'

export type FormFields = {
  name: string
  email: string
  message: string
}

export default function ContactsForm() {
  const {register, handleSubmit, reset} = useForm<FormFields>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Send Message')

  const onSubmit = async (data: FormFields) => {
    setIsSubmitting(true)
  }

  const inputClasses = cn('block w-full px-6 py-4 sm:px-5', TYPO.p, 'bg-white-purple text-purple-border placeholder:text-purple-border font-normal rounded-3xl sm:rounded-2xl', '!outline-none duration-200 hover:border-background focus-visible:border-background')

  return (
    <form className="flex flex-col justify-between sm:gap-6" onSubmit={handleSubmit(onSubmit)}>
      <P className="hidden sm:block">Contact us below</P>

      <div className="flex flex-col h-full gap-4 sm:gap-3">
        <input type="text" className={inputClasses} placeholder="Name" {...register('name', {required: true})} />

        <input type="email" className={inputClasses} placeholder="Email" {...register('email', {required: true})} />

        <textarea className={cn(inputClasses, 'flex-1')} placeholder="Message" {...register('message')} rows={3} />

        <button type="submit" disabled={isSubmitting} className={cn([BUTTON.base, BUTTON.primary], 'w-full uppercase', isSubmitting && 'text-foreground/60')}>
          {buttonText}
        </button>
      </div>
    </form>
  )
}
