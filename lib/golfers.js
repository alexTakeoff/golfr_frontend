export function getAllGolfersIds() {
    const fileNames = fs.readdirSync(golfersDirectory);
  
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

export function getGolferData(id) {
    const fullPath = path.join(golfersDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  }