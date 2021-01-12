import { CompatibleCases } from 'caseize'
import { RequestHandler } from 'express'

export type CaseizeRequest = (casing?: CompatibleCases) => RequestHandler
