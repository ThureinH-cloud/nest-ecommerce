import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt"
import { RoleService } from 'src/role/role.service';
import { SignUpAuthDto } from 'src/auth/dto/sign-up-auth.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>,
    private roleService:RoleService
  ) {

  }
 async create(createUserDto: SignUpAuthDto) { 
    const role=await this.roleService.getRole("user")
    const user=new User();
    const hashedPassword=await bcrypt.hash(createUserDto.password,10)
    Object.assign(user,{...createUserDto,password:hashedPassword,role:role})
    return this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email:string) {
    const user=await this.userRepository.findOne({
      where:{
        email
      }
    })
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
