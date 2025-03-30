import { RatingGroup } from '@chakra-ui/react'

const emojis: Record<string, string> = {
  1: '😡',
  2: '😠',
  3: '😐',
  4: '😊',
  5: '😍',
}

const ExperienceRating = () => {
  return (
    <RatingGroup.Root
      count={5}
      flexDirection="column"
      alignSelf="start"
      defaultChecked={false}
    >
      <RatingGroup.HiddenInput />
      <RatingGroup.Label>
        Your level of satisfaction as a developer <br />
      </RatingGroup.Label>
      <RatingGroup.Control>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingGroup.Item
            key={index}
            index={index + 1}
            minW="9"
            filter={{ base: 'grayscale(1)', _checked: 'revert' }}
            transition="scale 0.1s"
            _hover={{ scale: '1.1' }}
          >
            {emojis[index + 1]}
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}

export default ExperienceRating
