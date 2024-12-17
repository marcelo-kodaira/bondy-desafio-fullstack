'use-client'


export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Bem-vindo!</h1>
        <p className="text-center text-gray-600">
          Você está logado com sucesso.
        </p>
      </div>
    </div>
  );
}
