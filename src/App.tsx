import { Center, Heading, VStack } from '@chakra-ui/react'
import FormView from './components/ui/FormView'

function App() {
  return (
    <Center paddingTop="24">
      <VStack alignItems="start">
        <Heading
          size="6xl"
          fontWeight="extrabold"
          letterSpacing="tighter"
          paddingBottom="8"
        >
          Programming
          <br />
          Survey
        </Heading>
        <FormView />
      </VStack>
    </Center>
  )
}

export default App
