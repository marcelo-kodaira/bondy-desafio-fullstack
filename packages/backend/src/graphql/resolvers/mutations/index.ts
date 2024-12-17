import { GraphQLResolveInfo } from 'graphql'
import { mutationTest } from './mutationTest'
import { User } from '../../../models/User';
import bcrypt from 'bcrypt'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),

  async login(_: any, { email, password }: { email: string; password: string }) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Senha inválida.');
    }

    return user;
  },
}
