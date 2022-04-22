import * as fs from 'fs';

export default function writeToFile(data) {
  try {
    fs.writeFileSync('sponsored-repos.json', JSON.stringify(data));
  } catch(err) {
    console.log(err);
  }
}