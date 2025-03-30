import { Box, Button, Card, VStack } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import ExperienceRating from './ExperienceRating'
import FormProgress from './FormProgress'
import ProgrammingLanguagesSelect from './ProgrammingLanguagesSelect'
import TextInput from './TextInput'
import { toaster } from './toaster'

const FormView = () => {
  const submitForm = () => {
    if (
      nameInputErrorText !== null ||
      programmingLanguagesErrorText !== null ||
      name.trim().length === 0 ||
      programmingLanguages.length === 0
    ) {
      toaster.create({
        title: 'Validation errors',
        description: 'Fill all required inputs',
        type: 'error',
      })
      return
    }
    clearForm()
    toaster.create({
      title: 'Success',
      description: 'Form sent',
      type: 'success',
    })
  }

  const clearForm = () => {
    hasBeenModified.current = false
    setName('')
    setNameInputErrorText(null)
    setCompany('')
    setProgrammingLanguages([])
    setProgrammingLanguagesErrorText(null)
    setSatisfactionLevel(5)
  }

  const [name, setName] = useState('')
  const [nameInputErrorText, setNameInputErrorText] = useState<string | null>(
    null
  )

  const [company, setCompany] = useState('')

  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([])
  const [programmingLanguagesErrorText, setProgrammingLanguagesErrorText] =
    useState<string | null>(null)

  const [satisfactionLevel, setSatisfactionLevel] = useState<number>(5)
  const [progress, setProgress] = useState(0)
  const hasBeenModified = useRef(false)
  const isMounting = useRef(true)

  useEffect(() => {
    if (!hasBeenModified.current) return
    if (name.trim().length === 0) setNameInputErrorText('Name is required')
    else if (name.trim().length < 2)
      setNameInputErrorText('Name must be at least 2 characters long')
    else setNameInputErrorText(null)
  }, [name])

  useEffect(() => {
    if (!hasBeenModified.current) return
    if (programmingLanguages.length === 0)
      setProgrammingLanguagesErrorText(
        'Select at least one programming language'
      )
    else setProgrammingLanguagesErrorText(null)
  }, [programmingLanguages])

  useEffect(() => {
    if (isMounting.current) {
      isMounting.current = false
      return
    }
    hasBeenModified.current = true

    let progressSum = 0
    if (name.trim().length !== 0 && nameInputErrorText === null)
      progressSum += 50
    if (
      programmingLanguages.length !== 0 &&
      programmingLanguagesErrorText === null
    )
      progressSum += 50
    console.log(progressSum)
    setProgress(progressSum)
  }, [
    name,
    company,
    programmingLanguages,
    satisfactionLevel,
    nameInputErrorText,
    programmingLanguagesErrorText,
  ])

  return (
    <Card.Root variant="outline" size="lg" width="md">
      <Card.Body>
        <VStack gap="8">
          <TextInput
            value={name}
            name="Name"
            placeholder="Elton John"
            errorMessage={nameInputErrorText}
            required
            onChange={setName}
          />
          <TextInput
            value={company}
            name="Company"
            placeholder="Tesla"
            errorMessage={null}
            onChange={setCompany}
          />
          <ProgrammingLanguagesSelect
            value={programmingLanguages}
            onValueChanged={setProgrammingLanguages}
            errorMessage={programmingLanguagesErrorText}
          />
          <ExperienceRating
            value={satisfactionLevel}
            onValueChanged={setSatisfactionLevel}
          />
        </VStack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Box marginEnd="3">
          <FormProgress value={progress} />
        </Box>
        <Button variant="outline" onClick={clearForm}>
          Clear
        </Button>
        <Button variant="solid" onClick={submitForm}>
          Send
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default FormView
