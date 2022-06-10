const spinAnimation = function(arr, time) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      process.stdout.write("\r" + arr[i] + "    ");
    }, time);
    time = time + 200;
  }
  setTimeout(() => {
    console.log();
  }, time);
};
let time = 0;
const frames = ["|", "/", "-", "\\","|", "/", "-", "\\", "|"];
spinAnimation(frames, time);