import { IResolvers } from '@graphql-tools/utils'
import { merge } from 'lodash'
import { UserResolvers } from './resolvers/UserResolver'


const resolverMap: IResolvers = merge(UserResolvers)
export default resolverMap