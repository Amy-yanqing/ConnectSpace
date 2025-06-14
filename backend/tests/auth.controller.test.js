import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { signup, login, logout } from "../controllers/auth.controller.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

// Mock User model
jest.unstable_mockModule("../models/user.model.js", () => ({
  default: {
    findOne: jest.fn(),
    prototype: {
      save: jest.fn()
    }
  }
}));

// Mock generateTokenAndSetCookie
jest.unstable_mockModule("../lib/utils/generateToken.js", () => ({
  generateTokenAndSetCookie: jest.fn()
}));

const User = (await import("../models/user.model.js")).default;
const { generateTokenAndSetCookie } = await import("../lib/utils/generateToken.js");

describe("Auth Controller", () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockReq = {
      body: {}
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      cookie: jest.fn()
    };
    jest.clearAllMocks();
  });

  it("should return error for invalid email format", async () => {
    mockReq.body = {
      fullName: "Test User",
      username: "testuser",
      email: "invalid-email",
      password: "password123"
    };

    await signup(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ 
      error: "Invalid email format" 
    });
  });

  it("should logout successfully", async () => {
    await logout(mockReq, mockRes);

  
    expect(mockRes.cookie).toHaveBeenCalledWith("jwt", "", { maxAge: 0 });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ 
      message: "Logged out successfully" 
    });
  });
});