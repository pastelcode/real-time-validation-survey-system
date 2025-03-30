import { createListCollection, Field, Portal, Select } from '@chakra-ui/react'

const ProgrammingLanguagesSelect = ({
  value,
  onValueChanged,
  errorMessage,
}: {
  value: string[]
  onValueChanged: (value: string[]) => void
  errorMessage: string | null
}) => {
  const collection = createListCollection({
    items: [
      'rust',
      'python',
      'swift',
      'kotlin',
      'typescript',
      'go',
      'dart',
      'r',
      'c',
      'carbon',
      'other',
    ].map((value) => ({
      value: value,
      label: `${value.charAt(0).toUpperCase()}${value.slice(1)}`,
    })),
  })

  return (
    <Field.Root invalid={errorMessage !== null}>
      <Select.Root
        multiple
        collection={collection}
        value={value}
        onValueChange={(details) =>
          onValueChanged(details.items.map((element) => element.value))
        }
      >
        <Select.HiddenSelect />
        <Select.Label>Programming languages you work with</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select language" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {collection.items.map((language) => (
                <Select.Item item={language} key={language.value}>
                  {language.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    </Field.Root>
  )
}

export default ProgrammingLanguagesSelect
