import { ProgressCircle } from '@chakra-ui/react'

const FormProgress = ({ value }: { value: number }) => {
  return (
    <ProgressCircle.Root size="xs" value={value}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range strokeLinecap="round" />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}

export default FormProgress
