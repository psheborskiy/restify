import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  readonly LOGIN = "admin";
  readonly PASSWORD = "123321";

  async validateUser(username: string, pass: string): Promise<any> {
    if (username === this.LOGIN && pass === this.PASSWORD) {
      return { 
        user: "admin",
        userId: 1,
        someValue: "lorem15"
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { userName: user.name, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}