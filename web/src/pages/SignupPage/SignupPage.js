import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.superheroes())
    }
  }, [isAuthenticated])

  // focus on brukernavn box on page load
  const brukernavnRef = useRef(null)
  useEffect(() => {
    brukernavnRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.brukernavn,
      password: data.passord,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="brukernavn"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Brukernavn(email)
                  </Label>
                  <TextField
                    name="brukernavn"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={brukernavnRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Brukernavn is required',
                      },
                    }}
                  />

                  <FieldError name="brukernavn" className="rw-field-error" />

                  <Label
                    name="passord"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Passord
                  </Label>
                  <PasswordField
                    name="passord"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Passord is required',
                      },
                    }}
                  />

                  <FieldError name="passord" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
