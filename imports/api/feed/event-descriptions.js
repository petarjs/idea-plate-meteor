import { EventTypes } from './event-types'

export const EventDescriptions = {
  [EventTypes.CREATED_IDEA]: ':username published a new idea.',
  [EventTypes.LIKED_IDEA]: ':username liked :idea.',
  [EventTypes.FOLLOWED_USER]: ':username followed :followedUser.',
}