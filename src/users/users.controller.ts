import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    getUsersByFilter(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
        return this.usersService.findUsers(role);
    }

    @Post()
    createUser(@Body() user: { name: string; email: string; role: 'INTERN' | 'ENGINEER' | 'MANAGER' }) {
        return this.usersService.createUser(user);
    }

    /**
     * Order matters here, if you have a get method with a param and a get method without a param
     * the one with a param will be called first, so you need to specify the param in the route
     * for example, if you have a get method with a param and a get method without a param
     */

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.usersService.findById(+id);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: {}) {
        return this.usersService.updateUser(+id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(+id);
    }


}
