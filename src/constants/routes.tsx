const prefix = process.env.NODE_ENV === 'production' ? '/work-record' : '';
const Home = {
  path: `${prefix}/`,
};

const WorkSpent = {
  path: `${prefix}/work_spent`,
  title: "Work Spent報告",
};

const LinkBook = {
  path: `${prefix}/linkbook`,
  title: "リンクブック",
}

const LinkBookStaging = {
  path: `${prefix}/linkbook_staging`,
  title: "「Staging」リンクブック",
}

const LinkBookProd = {
  path: `${prefix}/linkbook_prod`,
  title: "「本番」リンクブック",
}

export { Home, WorkSpent, LinkBook,LinkBookStaging, LinkBookProd };
