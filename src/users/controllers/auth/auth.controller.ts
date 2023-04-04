import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signUp(@Req() req: Request, @Res() res: Response) {
    res.cookie('cookie', 'ddgdgdgdggdgdg', {
      expires: new Date(Number(new Date()) + 1000 * 60 * 60),
    });
    res.json({ message: 'Hello world' });
    return { message: 'register successfull', user: req.body };
  }

  @Post('logout')
  signOut(@Req() req: Request, @Res() res: Response) {
    if (!req.cookies?.cookie)
      return res.status(500).json({ message: 'unauthorized' });

    res.clearCookie('cookie');
    return res.json({ message: 'logout' });
  }
}
