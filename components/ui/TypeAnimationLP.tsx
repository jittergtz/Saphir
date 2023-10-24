"use client"
import React from 'react'
import Typewriter from 'typewriter-effect'

function TypeAnimationLP() {
  return (
    <Typewriter
    options={{
        loop: true,
    }}
    onInit={(Typewriter) => {
        Typewriter.typeString("Saphir dein neuer Note Editor")
        .pauseFor(1000).deleteAll().typeString("Sicher, schnell und überall Notizen schreiben.")
        .pauseFor(1000).deleteAll().typeString("Völlig Kostenfrei nutzen und arbeiten.")
        .start()
    }}
    />
  )
}

export default TypeAnimationLP