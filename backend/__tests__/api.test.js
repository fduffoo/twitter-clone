// api.test.js
const request = require('supertest');
const app = require('../app'); // Import your Express app
const mongoose = require('mongoose');
const Tweet = require('../models/Tweet');
const User = require('../models/User');

// Mock data
let userToken;
let tweetId;

beforeAll(async () => {
    // Create a test user
    const user = await User.create({
        username: 'testuser',
        email: 'testuser@example.com',
        password: await bcrypt.hash('password123', 10),
    });

    // Log in to get token
    const response = await request(app)
        .post('/api/users/login')
        .send({ email: 'testuser@example.com', password: 'password123' });
    userToken = response.body.token;
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Tweets API', () => {
    test('Create a new tweet', async () => {
        const response = await request(app)
            .post('/api/tweets')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'This is a test tweet' });

        expect(response.statusCode).toBe(201);
        expect(response.body.content).toBe('This is a test tweet');
        tweetId = response.body._id;
    });

    test('Get all tweets', async () => {
        const response = await request(app).get('/api/tweets');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Get a tweet by ID', async () => {
        const response = await request(app)
            .get(`/api/tweets/${tweetId}`)
            .set('Authorization', `Bearer ${userToken}`);

        expect(response.statusCode).toBe(200);
        expect(response.body._id).toBe(tweetId);
    });

    test('Like a tweet', async () => {
        const response = await request(app)
            .post(`/api/tweets/${tweetId}/like`)
            .set('Authorization', `Bearer ${userToken}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body.likes.length).toBe(1);
    });

    test('Delete a tweet', async () => {
        const response = await request(app)
            .delete(`/api/tweets/${tweetId}`)
            .set('Authorization', `Bearer ${userToken}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Tweet deleted successfully');
    });
});
