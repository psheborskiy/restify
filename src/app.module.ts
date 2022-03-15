import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './cars/car.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { LocalStrategy } from './auth/strategy/local.strategy';

@Module({
  imports: [
    CarModule, 
    MongooseModule.forRoot('mongodb://localhost/local'),
    PassportModule,
    JwtModule.register({
      secret: "dfs#5456erDJH8434@!",
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, LocalStrategy, JwtStrategy],
})
export class AppModule { }
