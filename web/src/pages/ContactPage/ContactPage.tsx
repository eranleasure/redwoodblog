import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import {
  EmailField,
  FieldError,
  Form,
  FormError,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Toaster />
      <Form
        className="flex flex-col space-y-4"
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} wrapperClassName="form-error" />

        <label htmlFor="name">Name</label>
        <TextField
          name="name"
          validation={{ required: true }}
          className="border border-gray-400 p-2 bg-gray-600"
        />
        <FieldError name="name" className="text-red-500 border-red-500" />

        <label htmlFor="email">Email</label>
        <EmailField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          className="border border-gray-400 p-2 bg-gray-600"
        />
        <FieldError name="email" className="text-red-500" />

        <label htmlFor="message">Message</label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          className="border border-gray-400 p-2 bg-gray-600"
        />
        <FieldError name="message" className="text-red-500" />

        <Submit disabled={loading} className=" bg-gray-900 py-2 px-4">
          Save
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
