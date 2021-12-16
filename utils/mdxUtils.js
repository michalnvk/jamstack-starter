import fs from "fs";
import path from "path";

// CONTENTS_PATH is useful when you want to get the path to a specific file
export const CONTENTS_PATH = path.join(process.cwd(), "contents", process.env.LANG);

// contentFilePaths is the list of all recursive mdx files inside the CONTENTS_PATH directory
const getPaths = (f) => {
  var paths = [];

  const folderContent = fs.readdirSync(f, { withFileTypes: true });
  folderContent.forEach((item) => {
    if (item.isDirectory()) {
      paths = paths.concat(getPaths(f + "/" + item.name));
    }
    if (/\.mdx?$/.test(item.name)) {
      var currentPath = f.replace(CONTENTS_PATH, "");
      paths.push((currentPath ? currentPath.substr(1) + "/" : "") + item.name);
    }
  });

  return paths;
};

export const contentFilePaths = getPaths(CONTENTS_PATH);
