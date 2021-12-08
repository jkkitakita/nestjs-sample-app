import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Post } from 'src/posts/models/post.model';
import { v4 as uuidv4 } from 'uuid';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async posts() {
    return this.prisma.post.findMany();
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    const uuid = uuidv4();
    return this.prisma.post.create({
      data: {
        id: String(uuid),
        title: title,
        content: content,
      },
    });
  }
}
