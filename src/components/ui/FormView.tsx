import { Button, Card, VStack } from '@chakra-ui/react'
import ExperienceRating from './ExperienceRating'
import ProgrammingLanguagesSelect from './ProgrammingLanguagesSelect'
import TextInput from './TextInput'

const FormView = () => {
  return (
    <Card.Root variant="outline" size="lg" width="md">
      <Card.Body>
        <VStack gap="8">
          <TextInput
            name="Name"
            placeholder="Elton John"
            errorMessage="hola"
            required
            onChange={(value) => console.log(`Name: ${value}`)}
          />
          <TextInput
            name="Company"
            placeholder="Tesla"
            errorMessage="hola"
            onChange={() => {}}
          />
          <ProgrammingLanguagesSelect />
          <ExperienceRating />
        </VStack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Clear</Button>
        <Button variant="solid">Send</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default FormView
