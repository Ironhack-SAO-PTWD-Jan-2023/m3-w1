require('dotenv/config');

const mongoose = require('mongoose');
const User = require('./models/User');
const Cat = require('./models/Cat');

const data = [
  {
    name: 'Hercules',
    password: 'Senha123',
    job: 'Dev'
  },
  {
    name: 'Matheus',
    password: 'Senha123',
    job: 'Dev'
  }
]

async function connect() {
  try {
    // conectando ao banco de dados
    const x = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Conectado ao banco de dados: ${x.connections[0].name}`);

    // criando usuário no meu BD
    const userFromDB = await User.create(data);
    // console.log(`Usuário criado no banco de dados: ${userFromDB.name}`);

    // lendo usuários do BD
    // const usersFromDB = await User.find({ job: 'Dev' }, null, { sort: { age: 1 } });
    // console.log("Usuários encontrados:", usersFromDB);

    // atualizando usuários do BD
    // const userFromDB = await User.findOne({ name: 'Hercules' });
    // const userFromDB = await User.findById('644b1490a364eff936f4f924');
    // userFromDB.job = 'Dev Sr.';
    // await userFromDB.save();
    // const userFromDB = await User.findOneAndUpdate({ name: 'Hercules' }, { job: 'Dev Señor' }, { new: true });
    // console.log(userFromDB);
    // const userFromDB = await User.updateMany({ job: 'Dev Señor' }, { job: 'Dev Sr' });
    // console.log(userFromDB);

    // apagando usuários do BD
    // const userId = '644b1490a364eff936f4f924'
    // const response = await User.findOneAndRemove({ job: 'Dev' });
    // console.log(response);

    const catCountFromDB = await Cat.countDocuments({ name: 'IronCat 0'});
    console.log(catCountFromDB);
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados!', error);
  }
}

connect();