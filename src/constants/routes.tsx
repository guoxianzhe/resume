const prefix = process.env.NODE_ENV === "production" ? "" : "";
const Home = {
  path: `${prefix}/`,
};

const Resume = {
  path: `${prefix}/preview`,
};

export { Home, Resume };
