// utils.test.js
const jwt = require('jsonwebtoken');
const { generateToken } = require('../controllers/userController');

describe('Utility Functions', () => {
    test('generateToken should return a valid JWT', () => {
        const userId = '12345';
        const token = generateToken(userId);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        expect(decoded.id).toBe(userId);
    });

    test('generateToken should have an expiry of 30 days', () => {
        const userId = '12345';
        const token = generateToken(userId);

        const decoded = jwt.decode(token);
        const currentDate = Math.floor(Date.now() / 1000);
        const expiresIn30Days = 30 * 24 * 60 * 60;

        expect(decoded.exp - decoded.iat).toBe(expiresIn30Days);
    });
});
