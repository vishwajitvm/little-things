export default function ChocolateDay({ goBack }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center space-y-8">

        <h2 className="text-xl font-medium text-gray-800">
          chocolate day 🍫
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          Not everything needs words.  
          Some things just need to be shared.
        </p>

        <div className="bg-white rounded-2xl p-5 shadow-sm text-sm text-gray-700">
          If this were real,  
          I’d give you the last piece.
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
