import { useRef, useState, useEffect } from "react"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import { meal } from "../../constants"

import "./Intro.css"

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    let el = document.getElementById("playButton")

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  useEffect(() => {
    const videoElement = vidRef.current
    const handleClick = () => {
      setPlayVideo(false)
      videoElement.controls = true
    }
    videoElement.addEventListener("click", handleClick)

    return () => {
      videoElement.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {!playVideo && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            <BsFillPlayFill color="#fff" fontSize={30} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Intro
