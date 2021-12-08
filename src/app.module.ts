import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsResolver } from './posts/posts.resolever';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schme.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostsResolver],
})
export class AppModule {}
