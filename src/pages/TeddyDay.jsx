export default function TeddyDay({ goBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center space-y-8">

        <h2 className="text-xl font-medium text-gray-800">
          teddy day 🧸
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Some people feel like home.  
          Quiet. Warm. Familiar.
        </p>

        <div className="bg-white rounded-2xl p-5 shadow-sm text-sm text-gray-700">
          This is that kind of comfort.
        </div>

        <button
          onClick={goBack}
          className="text-xs text-gray-400 underline"
        >
          back
        </button>
      </div>
    </div>
  );
}
