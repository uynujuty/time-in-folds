const stages = [
  ["太初","一切尚未被定义。空白的形体，等待第一缕纤维落下。","assets/羊的背面图.png","从形体的背面，观察材料初始的铺展"],
  ["经纬","经线与纬线交织，材料开始建立秩序，形体逐渐显现。","assets/麻布材料1.png","纤维交错，建立最初的经纬秩序"],
  ["积岁","不同质地与时间痕迹不断叠加，记忆在表面沉积。","assets/羊身细节图.png","不同织物层叠，留下时间的肌理"],
  ["成章","材料彼此呼应，零散的片段汇聚为完整而丰富的形态。","assets/羊尾细节图.png","轻薄纱体与厚重织物形成对照"],
  ["化境","形体最终成形，材料、时间与生命意象融为一体。","assets/羊的完整图.png","材料、时间与生命形态在此汇合"]
];
const stageButtons = document.querySelectorAll(".stage");
stageButtons.forEach(btn => btn.addEventListener("click", () => {
  stageButtons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const i = Number(btn.dataset.stage);
  document.getElementById("stageNumber").textContent = `STAGE 0${i+1}`;
  document.getElementById("stageTitle").textContent = stages[i][0];
  document.getElementById("stageDescription").textContent = stages[i][1];
  document.getElementById("stageArtwork").src = stages[i][2];
  document.getElementById("stageCaption").textContent = stages[i][3];
}));
const dialog = document.getElementById("materialDialog");
document.querySelectorAll(".material-card").forEach(card => card.addEventListener("click", () => {
  document.getElementById("dialogTitle").textContent = card.dataset.material;
  document.getElementById("dialogDescription").textContent = card.dataset.desc;
  const holder = document.getElementById("dialogImages");
  holder.replaceChildren();
  card.dataset.images.split("|").forEach((file, index) => {
    const img = document.createElement("img");
    img.src = `assets/${file}`;
    img.alt = `${card.dataset.material}材料纹理 ${index + 1}`;
    holder.appendChild(img);
  });
  dialog.showModal();
}));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
document.querySelectorAll(".view-buttons button").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".view-buttons button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const img = document.getElementById("mainArtwork");
  img.style.opacity = "0";
  window.setTimeout(() => {
    img.src = btn.dataset.image;
    img.alt = `羊形织物艺术作品${btn.dataset.view}`;
    img.style.opacity = "1";
  }, 120);
  document.getElementById("viewName").textContent = btn.dataset.view;
  document.getElementById("imageCaption").textContent = `${btn.dataset.view} · TIME IN FOLDS`;
}));
document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "76px"; nav.style.left = "0"; nav.style.right = "0";
  nav.style.padding = "20px 7vw"; nav.style.background = "var(--paper)";
  nav.style.flexDirection = "column";
});
