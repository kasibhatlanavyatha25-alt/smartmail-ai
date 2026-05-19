import {
  FaRobot,
  FaEnvelope,
  FaShieldAlt
}
from "react-icons/fa";

function FeatureCards() {

  return (

    <div className="flex justify-center gap-6 px-6 mt-10 flex-wrap">

      {/* Card 1 */}

      <div
        className="
        w-72
        bg-slate-900
        border border-slate-700
        rounded-2xl
        p-6
        hover:scale-105
        transition
        duration-300
        shadow-xl
        "
      >

        <FaEnvelope className="text-4xl text-blue-400 mb-4" />

        <h2 className="text-2xl font-semibold">

          AI Classification

        </h2>

      </div>



      {/* Card 2 */}

      <div
        className="
        w-72
        bg-slate-900
        border border-slate-700
        rounded-2xl
        p-6
        hover:scale-105
        transition
        duration-300
        shadow-xl
        "
      >

        <FaRobot className="text-4xl text-purple-400 mb-4" />

        <h2 className="text-2xl font-semibold">

          Tone Rewriting

        </h2>

      </div>



      {/* Card 3 */}

      <div
        className="
        w-72
        bg-slate-900
        border border-slate-700
        rounded-2xl
        p-6
        hover:scale-105
        transition
        duration-300
        shadow-xl
        "
      >

        <FaShieldAlt className="text-4xl text-pink-400 mb-4" />

        <h2 className="text-2xl font-semibold">

          Secure Processing

        </h2>

      </div>

    </div>
  );
}

export default FeatureCards;