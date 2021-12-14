import { Router } from 'express';
import signUpTemplateCopy from '../models/SignUpModels'; 
import { genSalt, hash } from 'bcrypt';
const router = Router();

router.post('/signup', async (req, res) =>{

  const saltPassword = await genSalt(10);
  const securePsswd = await hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePsswd,
  })
  signedUpUser.save()
  .then(data =>{
    res.json(data);
  })
  .catch(error =>{
    res.json(error);
  });
  
});

export default router;