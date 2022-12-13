class AppAnimations {
  static slideToRight = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  static slideToRight2 = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  static slideToTop = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  static slideToLeft = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
  };
  static SentenceTyping = {
    hidden: {
      color: "#f26822",
      diplay: "none",
    },
    visible: {
      diplay: "inline",
      color: "#888",
      transition: {
        staggerChildren: 0.08,
        when: "afterChildren",
        duration: 2,
      },
    },
  };

  static LetterTyping = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
}

export default AppAnimations;
