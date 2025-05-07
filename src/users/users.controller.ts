import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    getUsersByFilter(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
        return this.usersService.findUsers(role);
    }

    @Post()
    createUser(@Body(ValidationPipe) user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    /**
     * Order matters here, if you have a get method with a param and a get method without a param
     * the one with a param will be called first, so you need to specify the param in the route
     * for example, if you have a get method with a param and a get method without a param
     */

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findById(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUser: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }


}
