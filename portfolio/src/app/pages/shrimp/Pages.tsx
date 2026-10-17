import { SuccessEffects, FailEffects } from "@/app/pages/shrimp/effects"

const IMG = "/shrimp-images"

// index.html
export function ShrimpHome() {
  return (
    <>
      <title>shrimp?</title>
      <link rel="icon" type="image/x-icon" href={`${IMG}/shrimp.jpg`} />
      <style>{`
        body {
          margin: auto;
          width: auto;
          text-align: center;
          background-color: black;
        }

        .button {
          background-color: #04AA6D;
          border: 0px;
          margin-top: 20px;
          transition-duration: 0.4s;
          border-radius: 8px;
          font-size: 20px;
          padding: 14px 40px;
          cursor: pointer;
        }

        .button:hover {
          background-color: black;
          color: white;
          border: 2px solid #04AA6D;
        }
      `}</style>

      <img src={`${IMG}/shrimp.jpg`} />
      <form action="/shrimp/test">
        <button className="button"><b>Begin test?</b></button>
      </form>
    </>
  )
}

// test.html
export function ShrimpTest() {
  return (
    <>
      <title>shrimp?</title>
      <link rel="icon" type="image/x-icon" href={`${IMG}/eyebrow.jpg`} />
      <style>{`
        body { background-color: black; }

        img.main {
          max-height: 70vh;
          width: 100%;
          margin: auto;
        }

        h1.main {
          text-align: center;
          width: auto;
          color: white;
        }

        .buttons {
          padding-top: 2vh;
          padding-bottom: 10vh;
          display: grid;
          text-align: center;
          grid-template-columns: auto auto;
          margin-top: 20px;
        }

        .button {
          background-color: #04AA6D;
          border: 0px;
          transition-duration: 0.4s;
          border-radius: 8px;
          font-size: 20px;
          padding: 14px 40px;
          cursor: pointer;
        }

        .button:hover {
          background-color: black;
          color: white;
          border: 2px solid #04AA6D;
        }
      `}</style>

      <img className="main" src={`${IMG}/eyebrow.jpg`} />
      <h1 className="main">Are you a shrimp?</h1>
      <div className="buttons">
        <form action="/shrimp/fail">
          <button className="button"><b>Yes</b></button>
        </form>
        <form action="/shrimp/success">
          <button className="button"><b>No</b></button>
        </form>
      </div>
    </>
  )
}

// success.html
export function ShrimpSuccess() {
  return (
    <>
      <title>Good job!</title>
      <link rel="icon" type="image/x-icon" href={`${IMG}/party.jpg`} />
      <style>{`
        body { background-color: black; }

        video {
          margin: auto;
          width: 100%;
          max-height: 90vh;
        }

        .retry { text-align: center; }

        .button {
          background-color: #04AA6D;
          border: 0px;
          margin-top: 20px;
          transition-duration: 0.4s;
          border-radius: 8px;
          font-size: 20px;
          padding: 14px 40px;
          cursor: pointer;
        }

        .button:hover {
          background-color: black;
          color: white;
          border: 2px solid #04AA6D;
        }
      `}</style>

      <video id="shrimple" muted loop autoPlay>
        <source src={`${IMG}/shrimpleasthat.mp4`} type="video/mp4" />
      </video>

      <audio id="cheer" muted autoPlay>
        <source src={`${IMG}/kids-cheering-sound-effect.mp3`} type="audio/mp3" />
      </audio>

      <form className="retry" action="/shrimp">
        <button className="button"><b>Try again?</b></button>
      </form>

      <SuccessEffects />
    </>
  )
}

// fail.html
export function ShrimpFail() {
  return (
    <>
      <title>L bozo</title>
      <link rel="icon" type="image/x-icon" href={`${IMG}/laugh.jpg`} />
      <style>{`
        img {
          width: 100vw;
          max-height: 80vh;
          margin: auto;
        }

        body { background-color: blue; }

        .retry { text-align: center; }

        .button {
          background-color: #04AA6D;
          border: 0px;
          margin-top: 20px;
          transition-duration: 0.4s;
          border-radius: 8px;
          font-size: 20px;
          padding: 14px 40px;
          cursor: pointer;
        }

        .button:hover {
          background-color: black;
          color: white;
          border: 2px solid #04AA6D;
        }
      `}</style>

      <img src={`${IMG}/laughing_at_you.webp`} />

      <audio id="laugh" muted autoPlay>
        <source src={`${IMG}/cat-laugh-meme-1.mp3`} type="audio/mp3" />
      </audio>

      <form className="retry" action="/shrimp">
        <button className="button"><b>Try again?</b></button>
      </form>

      <FailEffects />
    </>
  )
}