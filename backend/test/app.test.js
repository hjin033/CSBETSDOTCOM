const request = require('supertest');
const bcrypt = require('bcrypt');
const pool = require('../db'); 
const app = require('../app'); 

beforeEach(() => {
    jest.spyOn(pool, 'query').mockImplementation((query, values) => {
        if (query.includes('INSERT INTO users')) {
            return Promise.resolve({
              rows: [{ id: 1, username: values[0], balance: 100, isAdmin: false }],
            });
          }

          return Promise.resolve({ rows: [] });
    });
  });
  
  afterEach(() => {
    jest.clearAllMocks(); 
  });
  
  describe('API tests', () => {
    test('GET / should return "Server is running!"', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('Server is running!');
    });
  
    test('POST /register should register a user', async () => {
      const mockUser = { username: 'testUser', password: 'password123' };
      const hashedPassword = await bcrypt.hash(mockUser.password, 10);
  
      pool.query.mockResolvedValueOnce({
        rows: [{ username: mockUser.username, password: hashedPassword, balance: 100, isAdmin: false }],
      });
  
      const response = await request(app)
        .post('/register')
        .send(mockUser);
  
      expect(response.statusCode).toBe(200);
      expect(response.body.username).toBe(mockUser.username);
    });
  
    test('GET /api/itemPrice should return item price', async () => {
        const mockItem = { skin: 'testSkin', wear: 'minimal' };
        const mockPrice = 50;
  
        pool.query.mockResolvedValueOnce({
            rows: [{ price: mockPrice }],
        });
  
        const response = await request(app)
            .get('/api/itemPrice')
            .query(mockItem);
  
        expect(response.statusCode).toBe(200);
        expect(response.body.price).toBe(mockPrice);
    });

    test('POST /register should validate required fields', async () => {
        const response = await request(app)
          .post('/register')
          .send({ username: '', password: '' }); 
      
        expect(response.statusCode).toBe(400); 
        expect(response.body.message).toContain('Username and password are required');
    });

    test('POST /register should not allow duplicate usernames', async () => {
        const mockUser = { username: 'existingUser', password: 'password123' };
      
        pool.query.mockResolvedValueOnce({
          rows: [{ username: mockUser.username }],
        });
      
        pool.query.mockResolvedValueOnce({
          rows: [{ username: mockUser.username }],
        });
      
        const response = await request(app)
          .post('/register')
          .send(mockUser);
      
        expect(response.statusCode).toBe(409); 
        expect(response.body.message).toContain('Username already exists');
      });

      test('GET /api/itemPrice should validate query parameters', async () => {
        const response = await request(app)
          .get('/api/itemPrice')
          .query({ skin: '', wear: '' });
      
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toContain('Skin and wear are required');
      });

      test('GET /api/itemPrice should return 404 for nonexistent items', async () => {
        const mockItem = { skin: 'nonexistentSkin', wear: 'nonexistentWear' };
      
        pool.query.mockResolvedValueOnce({ rows: [] });
      
        const response = await request(app)
          .get('/api/itemPrice')
          .query(mockItem);
      
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toContain('Item not found');
      });

      test('GET /protectedEndpoint should require authentication', async () => {
        const response = await request(app).get('/protectedEndpoint');
      
        expect(response.statusCode).toBe(401);
        expect(response.body.message).toContain('Please log in to access this resource');
      });

      test('POST /register should handle database errors gracefully', async () => {
        const mockUser = { username: 'testUser', password: 'password123' };
      
        pool.query.mockImplementation(() => Promise.reject(new Error('Database error')));
      
        const response = await request(app)
          .post('/register')
          .send(mockUser);
      
        expect(response.statusCode).toBe(500);
        expect(response.body.message).toContain('Server error');
      });

      test('POST /api/auth/login should successfully log in with correct credentials', async () => {
        const mockUser = { username: 'validUser', password: 'validPassword' };
        const hashedPassword = await bcrypt.hash(mockUser.password, 10);
      
        pool.query.mockResolvedValueOnce({
          rows: [{ username: mockUser.username, password: hashedPassword }],
        });
      
        const response = await request(app)
          .post('/api/auth/login')
          .send(mockUser);
      
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain('Login successful');
      });

      test('POST /api/auth/login should require both username and password', async () => {
        const response = await request(app)
          .post('/api/auth/login')
          .send({ username: 'userWithoutPassword' });
      
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toContain('Username and password are required');
      });

      test('POST /api/auth/login should reject non-existent usernames', async () => {
        const mockUser = { username: 'nonExistentUser', password: 'anyPassword' };
      
        pool.query.mockResolvedValueOnce({ rows: [] });
      
        const response = await request(app)
          .post('/api/auth/login')
          .send(mockUser);
      
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toContain('User not found');
      });

      test('POST /api/auth/login should reject incorrect passwords', async () => {
        const mockUser = { username: 'existingUser', password: 'wrongPassword' };
        const correctHashedPassword = await bcrypt.hash('correctPassword', 10);
      
        pool.query.mockResolvedValueOnce({
          rows: [{ username: mockUser.username, password: correctHashedPassword }],
        });
      
        const response = await request(app)
          .post('/api/auth/login')
          .send(mockUser);
      
        expect(response.statusCode).toBe(401);
        expect(response.body.error).toContain('Invalid password');
      });

      test('POST /api/auth/login should handle unexpected errors gracefully', async () => {
        const mockUser = { username: 'anyUser', password: 'anyPassword' };
      
        pool.query.mockImplementation(() => Promise.reject(new Error('Database error')));
      
        const response = await request(app)
          .post('/api/auth/login')
          .send(mockUser);
      
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toContain('An unexpected error occurred during the login process');
      });
  
  });