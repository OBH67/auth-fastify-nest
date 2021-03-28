import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/auth-nest'),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
    }),
    UserModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
