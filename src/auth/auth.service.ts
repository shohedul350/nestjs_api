import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService){}
  login() {return 'I am signed up';}
  signup() { return 'I am signed in';}
}
