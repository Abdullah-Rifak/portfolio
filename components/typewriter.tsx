"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
  const roles = [
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "Software Developer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentRole.slice(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        setText(currentRole.slice(0, text.length - 1));

        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="text-2xl text-blue-600 font-semibold">
      Aspiring{" "}
      <span className="border-r-2 border-blue-600 animate-pulse">
        {text}
      </span>
    </h2>
  );
}
