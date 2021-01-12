import { Request, Response, NextFunction } from 'express'
import caseize, { CompatibleCasesConstants } from 'caseize'
import { CaseizeRequest } from './types'

const middleware: CaseizeRequest = function (casing = CompatibleCasesConstants.CAMELCASE) {
  return function caseizeRequest(req: Request, res: Response, next: NextFunction) {
    if (req.query) req.query = caseize(req.query, casing)
    if (req.body) req.body = caseize(req.body, casing)
    next()
  }
}

export default middleware
