import { describe, it, expect, jest } from '@jest/globals';
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

describe("generateTokenAndSetCookie", () => {
  it("should set JWT cookie with correct name and options", () => {
    const userId = "123abc";
    const mockRes = {
      cookie: jest.fn()
    };
    
    generateTokenAndSetCookie(userId, mockRes);
    
    // Verify cookie was called
    expect(mockRes.cookie).toHaveBeenCalled();
    
    // Verify cookie name is 'jwt'
    const callArgs = mockRes.cookie.mock.calls[0];
    expect(callArgs[0]).toBe('jwt');
    
    // Verify token is a string
    expect(typeof callArgs[1]).toBe('string');
    
    // Verify cookie options
    expect(callArgs[2]).toMatchObject({
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite1: 'strict'
    });
  });

  it("should generate valid JWT token", () => {
    const userId = "testUser";
    const mockRes = { cookie: jest.fn() };
    
    generateTokenAndSetCookie(userId, mockRes);
    
    const token = mockRes.cookie.mock.calls[0][1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Your function uses 'id' not 'userId' in the token
    expect(decoded.id).toBe(userId);
  });
});