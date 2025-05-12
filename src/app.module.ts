import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppLoggerModule } from './app-logger/app-logger.module';
//main module file - specifies imports, controllers and providers
@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 10,
        },
      ]
    }),
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    AppLoggerModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: ThrottlerModule,
    },
    AppService],
})
export class AppModule { }
