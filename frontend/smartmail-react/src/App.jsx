import EmailBox from "./components/EmailBox";

function App() {
  return (
    <div className="bg-black min-h-screen text-white px-4 py-4">

      {/* TOP NAVBAR */}

      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2">

          <span className="text-purple-500 text-2xl">
            ✉️
          </span>

          <h1 className="font-bold text-xl">
            SmartMail AI
          </h1>

        </div>

        <button className="text-gray-300 text-xl">
          ⚙️
        </button>

      </div>

      {/* MAIN CONTAINER */}

      <div
        className="
        border
        border-blue-900
        rounded-[40px]
        p-6
        bg-[#030B22]
        "
      >

        {/* TITLE */}

        <div className="text-center mb-8">

          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-purple-500
            "
          >
            SmartMail AI
          </h1>

          <p className="text-gray-400 mt-2 text-xl">
            AI Email Platform
          </p>

        </div>

        {/* FEATURE CARDS */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-4
          mb-6
          "
        >

          {/* CARD 1 */}

          <div
            className="
            bg-[#081537]
            border
            border-blue-900
            rounded-2xl
            p-5
            "
          >

            <div className="text-4xl mb-3">
              📧
            </div>

            <h2 className="font-bold text-xl">
              AI Classification
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Automatically classify emails with AI
            </p>

          </div>

          {/* CARD 2 */}

          <div
            className="
            bg-[#081537]
            border
            border-blue-900
            rounded-2xl
            p-5
            "
          >

            <div className="text-4xl mb-3">
              🤖
            </div>

            <h2 className="font-bold text-xl">
              Tone Rewriting
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Rewrite emails in different tones
            </p>

          </div>

          {/* CARD 3 */}

          <div
            className="
            bg-[#081537]
            border
            border-blue-900
            rounded-2xl
            p-5
            "
          >

            <div className="text-4xl mb-3">
              🛡️
            </div>

            <h2 className="font-bold text-xl">
              Secure Processing
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Your data is processed securely
            </p>

          </div>

        </div>

        {/* EMAIL BOX */}

        <EmailBox />

      </div>

    </div>
  );
}

export default App;