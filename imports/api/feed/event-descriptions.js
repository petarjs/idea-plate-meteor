import { EventTypes } from './event-types'

export const EventDescriptions = {
  [EventTypes.CREATED_IDEA]: ':username published a new idea.',
  [EventTypes.LIKED_IDEA]: ':username liked :idea.',
  [EventTypes.DELETED_IDEA]: ':username deleted :idea.',
  [EventTypes.FOLLOWED_USER]: ':username followed :followedUser.',
}

export const EventDescriptionsHtml = {
  [EventTypes.CREATED_IDEA]: `<a href="/user/:userId">:username</a> published a new <a href="/find">idea</a>.`,
  [EventTypes.LIKED_IDEA]: `<a href="/user/:userId">:username</a> liked <a href="/find">:idea</a>.`,
  [EventTypes.DELETED_IDEA]: `<a href="/user/:userId">:username</a> deleted :idea.`,
  [EventTypes.FOLLOWED_USER]: `<a href="/user/:userId">:username</a> followed <a href="/user/:followedUserId">:followedUser</a>.`,
}