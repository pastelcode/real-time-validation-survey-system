import { Badge, Field, Input } from '@chakra-ui/react'

const TextInput = ({
  value,
  name,
  placeholder,
  required = false,
  errorMessage,
  onChange,
}: {
  value: string
  name: string
  placeholder: string
  required?: boolean
  errorMessage: string | null
  onChange: (value: string) => void
}) => (
  <Field.Root required={required} invalid={errorMessage !== null}>
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
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
    <Field.ErrorText>{errorMessage}</Field.ErrorText>
  </Field.Root>
)

export default TextInput
