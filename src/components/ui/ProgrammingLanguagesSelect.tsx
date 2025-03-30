import { createListCollection, Portal, Select } from '@chakra-ui/react'

const ProgrammingLanguagesSelect = () => {
  const collection = createListCollection({
    items: [
      { value: 'rust', label: 'Rust' },
      { value: 'python', label: 'Python' },
      { value: 'swift', label: 'Swift' },
      { value: 'kotlin', label: 'Kotlin' },
      { value: 'typescript', label: 'Typescript' },
      { value: 'go', label: 'Go' },
      { value: 'dart', label: 'Dart' },
      { value: 'r', label: 'R' },
      { value: 'c', label: 'C' },
      { value: 'carbon', label: 'Carbon' },
      { value: 'other', label: 'Other' },
    ],
  })

  return (
    <Select.Root multiple collection={collection}>
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
  )
}

export default ProgrammingLanguagesSelect
