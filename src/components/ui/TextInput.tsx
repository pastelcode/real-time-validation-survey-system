import { Badge, Field, Input } from '@chakra-ui/react'

const TextInput = ({
  name,
  placeholder,
  required = false,
  errorMessage,
  onChange,
}: {
  name: string
  placeholder: string
  required?: boolean
  errorMessage: string | null
  onChange: (value: string) => void
}) => (
  <Field.Root required={required}>
    <Field.Label>
      {name}
      <Field.RequiredIndicator
        fallback={
          <Badge size="xs" variant="surface">
            Optional
          </Badge>
        }
      />
    </Field.Label>
    <Input
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
    <Field.ErrorText>{errorMessage}</Field.ErrorText>
  </Field.Root>
)

export default TextInput
