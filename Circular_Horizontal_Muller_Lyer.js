// H34106070 Circular Müller-Lyer Illusion
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES); // 使用度數作為角度單位
  frameRate(40); // 設幀率為40，以確保動畫速度一致
  colorMode(HSL, 360, 100, 100); // 使用 HSL 色彩模式
}

function draw() {
  background(255); // 白色背景
  translate(width / 2, height / 2); // 將原點移到畫布中心

  let numIllusions = 30; // Müller-Lyer 錯覺的數量
  let radius = 300; // 圓的半徑

  for (let i = 0; i < numIllusions; i++) {
    let angle = map(i, 0, numIllusions, 0, 360); // 計算每個錯覺的角度
    let x = radius * cos(angle); // 計算 x 座標
    let y = radius * sin(angle); // 計算 y 座標

    let hueValue = map(i, 0, numIllusions, 0, 360); // 根據索引計算色相

    push();
    translate(x, y); // 移動到錯覺的位置
    rotate(angle + 90); // 旋轉使其垂直於圓周
    drawMullerLyer(hueValue); // 繪製帶顏色的 Müller-Lyer 錯覺
    pop();
  }
}

function drawMullerLyer(hueValue) {
  let lineLength = 40; // 線的長度
  let arrowSize = 8; // 箭頭的大小

  // 使用時間控制箭頭的方向，每隔一秒直接切換一次方向
  let period = 60; // 每60幀（約1秒）切換一次方向
  let direction = floor(frameCount / period) % 2 == 0 ? 1 : -1;

  stroke(color(hueValue, 100, 50)); // 設置線條顏色
  strokeWeight(2); // 線條寬度
  line(-lineLength / 2, 0, lineLength / 2, 0); // 繪製主線

  // 左側箭頭
  push();
  translate(-lineLength / 2, 0); // 移動到線的左端
  if (direction == 1) {
    // 箭頭指向內側
    line(0, 0, arrowSize, -arrowSize);
    line(0, 0, arrowSize, arrowSize);
  } else {
    // 箭頭指向外側
    line(0, 0, -arrowSize, -arrowSize);
    line(0, 0, -arrowSize, arrowSize);
  }
  pop();

  // 右側箭頭
  push();
  translate(lineLength / 2, 0); // 移動到線的右端
  if (direction == 1) {
    // 箭頭指向內側
    line(0, 0, -arrowSize, -arrowSize);
    line(0, 0, -arrowSize, arrowSize);
  } else {
    // 箭頭指向外側
    line(0, 0, arrowSize, -arrowSize);
    line(0, 0, arrowSize, arrowSize);
  }
  pop();
}
