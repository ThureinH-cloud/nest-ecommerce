/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService:JwtService,private configService:ConfigService){}
 async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const request=context.switchToHttp().getRequest();
    const token=request.headers.authorization?.split(' ')[1];
    const currentUser=await this.jwtService.verifyAsync(token,{
      secret:this.configService.get("JWT_SECRET_KEY")
    })
    console.log(currentUser)
    request.currentUser=currentUser;
    return true;
  }
}
