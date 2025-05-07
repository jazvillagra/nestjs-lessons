import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /**
     * Get all users or users by filter
     * @returns 
     */
    @Get()
    getUsersByFilter(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER') {
        return [];
    }

    @Post()
    createUser(@Body() user: {}) {
        return user;
    }

    /**
     * Order matters here, if you have a get method with a param and a get method without a param
     * the one with a param will be called first, so you need to specify the param in the route
     * for example, if you have a get method with a param and a get method without a param
     */

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return { id };
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: {}) {
        return { id, ...user };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return 'User deleted';
    }


}
