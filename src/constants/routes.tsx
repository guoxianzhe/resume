const prefix = process.env.NODE_ENV === "production" ? "/resume" : "";
const Home = {
  path: `${prefix}/`,
};

const Resume = {
  path: `${prefix}/download`,
};

export { Home, Resume };
