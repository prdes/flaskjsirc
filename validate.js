'use strict';

Yup.object().shape({
    username: Yup.string().max(32).required(),
    email: Yup.email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),  
  }).required();