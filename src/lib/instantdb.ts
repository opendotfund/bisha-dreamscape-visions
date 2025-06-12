import { createClient } from '@instantdb/react';

// Initialize the Instant DB client with auth
export const instant = createClient({
  appId: 'f86a8552-251e-4c33-9f07-e54fcc241307',
  auth: {
    type: 'magic',
    email: 'lovable_fan@example.com' // Default user email
  }
});

// Define our Tweet schema
export const schema = {
  tweets: {
    username: { type: 'string', required: true },
    content: { type: 'string', required: true },
    imageUrl: { type: 'string', required: false },
    metadata: {
      type: 'object',
      properties: {
        timestamp: { type: 'string', required: true },
        date: { type: 'string', required: true },
        likes: { type: 'number', default: 0 },
        retweets: { type: 'number', default: 0 },
        replies: { type: 'number', default: 0 }
      }
    }
  }
};

// Initialize the database with our schema
instant.init(schema); 