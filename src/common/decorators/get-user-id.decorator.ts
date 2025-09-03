import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

type AuthenticatedRequest = Request & { user?: { sub?: string } };

export const GetUserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string | undefined => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    return request.user?.sub;
  },
);
