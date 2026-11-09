import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '../ui/Button'
import { services } from '../../data/services'
import { contact } from '../../data/site'

const ENDPOINT = 'https://api.web3forms.com/submit'
const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Values = {
  name: string
  email: string
  company: string
  service: string
  message: string
  /** Honeypot. Real visitors never see or fill this field. */
  website_url: string
}

type Errors = Partial<Record<keyof Values, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: Values = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
  website_url: '',
}

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Please describe your project in at least 20 characters.'
  }
  return errors
}

const fieldClass = (invalid: boolean) =>
  `mt-2 block w-full rounded-sm border bg-white px-4 py-3 text-ink placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
    invalid ? 'border-red-700' : 'border-slate-400'
  }`

const labelClass = 'block text-sm font-semibold text-ink'
const errorClass = 'mt-2 text-sm font-semibold text-red-700'

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const successRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the thank-you message so keyboard and screen reader users notice it.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const field = event.target.name as keyof Values
    const value = event.target.value
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const found = validate(values)
    setErrors(found)
    const firstInvalid = (['name', 'email', 'message'] as const).find((key) => found[key])
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus()
      return
    }

    // Honeypot filled in: this is a bot. Pretend it worked and send nothing.
    if (values.website_url.trim() !== '') {
      setStatus('success')
      return
    }

    if (!accessKey) {
      console.error('VITE_WEB3FORMS_KEY is missing. Add it to .env and restart the dev server.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${values.name.trim()} | Hometeam website`,
          from_name: 'Hometeam Website',
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || 'Not provided',
          service: values.service || 'Not sure yet',
          message: values.message.trim(),
        }),
      })
      const data = (await response.json().catch(() => null)) as { success?: boolean } | null

      if (response.ok && data?.success !== false) {
        setValues(initialValues)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-panel border border-line bg-white p-8 text-center sm:p-10"
      >
        <CheckCircle2 aria-hidden="true" className="mx-auto size-10 text-brand-600" />
        <h2
          ref={successRef}
          tabIndex={-1}
          className="mt-4 text-2xl font-bold outline-none"
        >
          Thank you, your message has been sent.
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          We have received your enquiry and will reply to the email address you gave us.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project enquiry"
      className="rounded-panel border border-line bg-white p-6 sm:p-8"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="field-name" className={labelClass}>
            Name <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'field-name-error' : undefined}
            className={fieldClass(Boolean(errors.name))}
          />
          {errors.name && (
            <p id="field-name-error" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="field-email" className={labelClass}>
            Email <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'field-email-error' : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="field-email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="field-company" className={labelClass}>
              Company <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="field-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange}
              className={fieldClass(false)}
            />
          </div>

          <div>
            <label htmlFor="field-service" className={labelClass}>
              Service interested in
            </label>
            <select
              id="field-service"
              name="service"
              value={values.service}
              onChange={handleChange}
              className={fieldClass(false)}
            >
              <option value="">Not sure yet</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="field-message" className={labelClass}>
            Project description <span className="font-normal text-muted">(required)</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={6}
            required
            value={values.message}
            onChange={handleChange}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={
              errors.message ? 'field-message-hint field-message-error' : 'field-message-hint'
            }
            className={fieldClass(Boolean(errors.message))}
          />
          <p id="field-message-hint" className="mt-2 text-sm text-muted">
            Tell us what you are trying to achieve and any important details.
          </p>
          {errors.message && (
            <p id="field-message-error" className={errorClass}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Honeypot: hidden from people and screen readers, bots tend to fill it in. */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="field-website-url">Leave this field empty</label>
          <input
            id="field-website-url"
            name="website_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website_url}
            onChange={handleChange}
          />
        </div>

        {status === 'error' && (
          <div
            role="alert"
            className="flex gap-3 rounded-sm border border-red-700 bg-red-50 p-4 text-sm text-red-900"
          >
            <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <p className="leading-relaxed">
              Sorry, your message could not be sent. Please try again, or contact us directly at{' '}
              <a href={`mailto:${contact.email}`} className="font-semibold underline">
                {contact.email}
              </a>{' '}
              or on{' '}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        )}

        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? 'Sending...' : 'Send enquiry'}
        </Button>
      </div>
    </form>
  )
}
