import { useState, useRef } from "react";
import axios from "axios";

import {
  FaMicrophone,
  FaCopy,
  FaMoon,
  FaSun
}
from "react-icons/fa";

import { HiSpeakerWave }
from "react-icons/hi2";

function EmailBox() {

  const [text, setText] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [history, setHistory] = useState([]);

  const recognitionRef = useRef(null);



  // CLASSIFY EMAIL

  const classifyEmail = async () => {

    setLoading(true);

    try {

      const response = await axios.post(

        `http://localhost:8000/users/classify?text=${text}`
      );

      setResult(

        `Category: ${response.data.category}`
      );



      setHistory((prev) => [

        ...prev,

        {
          type: "Classification",
          text: text,
          result: response.data.category,
        }

      ]);
    }

    catch (error) {

      setResult("Classification Failed");
    }

    setLoading(false);
  };



  // REWRITE EMAIL

  const rewriteEmail = async () => {

    setLoading(true);

    try {

      const response = await axios.post(

        `http://localhost:8000/users/rewrite?text=${text}`
      );

      const rewritten =

`Professional Version:

${response.data.professional}



Friendly Version:

${response.data.friendly}`;

      setResult(rewritten);



      setHistory((prev) => [

        ...prev,

        {
          type: "Rewrite",
          text: text,
          result: rewritten,
        }

      ]);
    }

    catch (error) {

      setResult("Rewrite Failed");
    }

    setLoading(false);
  };



  // VOICE INPUT

  const startVoice = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Voice recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = (event) => {

      const transcript =
        event.results[0][0].transcript;

      setText(transcript);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };



  // SPEAK RESULT

  const speakResult = () => {

    const speech =
      new SpeechSynthesisUtterance(result);

    speech.lang = "en-US";

    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  };



  // COPY RESULT

  const copyResult = () => {

    navigator.clipboard.writeText(result);

    alert("Copied Successfully!");
  };



  return (

    <div className={`

      mt-10
      p-6
      rounded-3xl
      shadow-2xl
      transition-all

      ${darkMode
        ? "bg-slate-900 text-white"
        : "bg-white text-black"}

    `}>

      {/* TOP BAR */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">

          SmartMail AI

        </h2>



        <button

          onClick={() =>
            setDarkMode(!darkMode)
          }

          className="text-2xl"
        >

          {darkMode ? <FaSun /> : <FaMoon />}

        </button>

      </div>



      {/* TEXT AREA */}

      <textarea

        value={text}

        onChange={(e) =>
          setText(e.target.value)
        }

        placeholder="Paste email here..."

        className={`

        w-full
        h-40
        rounded-2xl
        p-5
        text-lg
        outline-none
        resize-none

        ${darkMode
          ? "bg-slate-800 text-white"
          : "bg-gray-200 text-black"}

        `}
      />



      {/* BUTTON SECTION */}

      <div className="flex items-center justify-center gap-10 mt-6 flex-wrap">

        {/* CLASSIFY */}

        <div className="flex items-center gap-3">

          <button

            onClick={startVoice}

            className="
            text-xl
            text-gray-300
            hover:text-white
            transition
            cursor-pointer
            "
          >

            <FaMicrophone />

          </button>



          <button

            onClick={classifyEmail}

            className="
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:scale-105
            transition
            py-3
            px-6
            rounded-xl
            text-base
            font-semibold
            text-white
            shadow-lg
            "
          >

            Classify Email

          </button>

        </div>



        {/* REWRITE */}

        <div className="flex items-center gap-3">

          <button

            onClick={speakResult}

            className="
            text-xl
            text-gray-300
            hover:text-white
            transition
            cursor-pointer
            "
          >

            <HiSpeakerWave />

          </button>



          <button

            onClick={rewriteEmail}

            className="
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:scale-105
            transition
            py-3
            px-6
            rounded-xl
            text-base
            font-semibold
            text-white
            shadow-lg
            "
          >

            Rewrite Email

          </button>

        </div>

      </div>



      {/* LOADING */}

      {loading && (

        <div className="mt-6 text-center text-lg animate-pulse">

          AI Processing...

        </div>

      )}



      {/* RESULT */}

      <div
        className={`

        mt-8
        rounded-2xl
        p-5
        min-h-[120px]
        whitespace-pre-wrap
        text-base
        relative

        ${darkMode
          ? "bg-slate-800"
          : "bg-gray-200"}

        `}
      >

        {/* COPY BUTTON */}

        <button

          onClick={copyResult}

          className="
          absolute
          top-4
          right-4
          text-lg
          hover:scale-110
          transition
          "
        >

          <FaCopy />

        </button>



        {result || "AI Results appear here..."}

      </div>



      {/* HISTORY */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">

          Email History

        </h2>



        <div className="space-y-4">

          {history.map((item, index) => (

            <div

              key={index}

              className={`

              p-4
              rounded-2xl

              ${darkMode
                ? "bg-slate-800"
                : "bg-gray-200"}

              `}
            >

              <p className="text-purple-400 font-bold">

                {item.type}

              </p>



              <p className="mt-2">

                {item.text}

              </p>



              <p className="mt-2 text-gray-400 whitespace-pre-wrap">

                {item.result}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default EmailBox;