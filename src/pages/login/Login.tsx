// Login.tsx

import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
    // Adicionar aqui a lógica de autenticação real, como fazer uma chamada à API
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[white] p-8 rounded shadow-md w-96">
        <h2 className="text-1xl font-bold mb-6 text-center">Entre na sua conta</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-green-600 
            text-white my-3 py-2 px-4 
            rounded-md hover:bg-green-500 
            focus:outline-none focus:bg-green-500 
            transition duration-500 ease-in-out"
            onClick={handleLogin}
          >
            <b>Entrar</b>
          </button>
          <div className='mt-3 '>
            <p className=' w-full texto-login px-1 text-center '>
              <b>Não tem conta?</b>
            </p>
            <hr className='hr-login mb-3 border-slate-300 w-full' />
          </div>
          <button
            type="button"
            className="w-full bg-white text-green-600 
            my-3 py-2 px-4 rounded-md 
            hover:bg-green-600 
            hover:text-white  
            focus:bg-green-600 border 
            border-green-600 transition 
            duration-500 ease-in-out"
            onClick={handleLogin}
           >
            <b>Cadastre-se</b>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
