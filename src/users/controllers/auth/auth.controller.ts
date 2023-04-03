import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('auth')
export class AuthController {
  @Post('signup')
  signUp(@Req() req: Request, @Res() res: Response) {
    res.cookie('cookie', 'ddgdgdgdggdgdg');
    res.json({ message: 'Hello world' });
    return { message: 'register successfull', user: req.body };
  }

  @Post('logout')
  signOut(@Req() req: Request, @Res() res: Response) {
    console.log(req);
    if (!req.cookies) res.status(500).json({ message: 'unauthorized' });
    res.json({ message: 'logout' });
  }
}
