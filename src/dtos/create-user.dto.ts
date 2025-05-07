export class CreateUserDto {
    id?: number;
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "MANAGER";
}