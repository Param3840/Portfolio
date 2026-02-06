const config = {
  title: "Paramveer | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Paramveer, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and let's build something amazing together!",
    short: "Discover the portfolio of Paramveer, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Paramveer",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Paramveer",
  email: "paramveersingh240303@gmail.com",
  site: "https://paramveer.site",

  githubUsername: "Paramveer",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    
    linkedin: "https://www.linkedin.com/in/param3840/",
    instagram: "https://www.instagram.com/param3840",
    
    github: "https://github.com/param3840",
  },
};
export { config };