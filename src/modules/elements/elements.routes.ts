import * as Joi from 'joi'
import { tryAPI } from './elements.controller';
export default [
  {
    method: 'get',
    path: '/elements',
    documentation: {
      description: 'element route'
    },
    validate: {
      body: Joi.object().keys({})
    },
    handler: [tryAPI]
  }
]