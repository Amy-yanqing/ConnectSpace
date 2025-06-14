import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { protectRoute } from "../middleware/protectRoute.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Mock the User model
jest.unstable_mockModule("../models/user.model.js", () => ({
  default: {
    findById: jest.fn()
  }
}));

const User = (await import("../models/user.model.js")).default;

describe("protectRoute middleware", () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = {
      cookies: {},
      user: null
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  it("should return 401 when no token provided", async () => {
    await protectRoute(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({ 
      error: "Unauthorized: No Token Provided" 
    });
    expect(mockNext).not.toHaveBeenCalled();
  });
});