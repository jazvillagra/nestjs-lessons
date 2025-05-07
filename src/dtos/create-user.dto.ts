import { IsEmail, IsEnum, isInt, IsNotEmpty, IsString, isString, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "MANAGER"], { message: "Valid role required" })
    @IsString()
    @IsNotEmpty()
    role: string;
}