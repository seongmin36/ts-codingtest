// 나무 자르기 [2805]
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const line1 = input[0].split(" ").map(Number);
const line2 = input[1].split(" ").map(Number);

line2.sort((a, b) => b - a);
for (let tree_h = line2[0]; tree_h > line2[line1[0] - 1]; tree_h--) {
  let tree_m = 0;
  let tree_maintain = 0;
  for (let i = 0; i < line1[0]; i++) {
    tree_maintain = line2[i] - tree_h;

    tree_m += tree_maintain;
    if (line1[1] === tree_m) {
      console.log(tree_h);
      return 0;
    }
  }
}
