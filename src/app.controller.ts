import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  [x: string]: any;
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  } 

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user)
  }  
  
}
