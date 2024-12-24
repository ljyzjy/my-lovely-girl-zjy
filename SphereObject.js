import { Mesh, TextGeometry, THREE, FontLoader } from "./AppImport.js";

export default class TextPrimitive extends Mesh {
  constructor(text = "邹佳余") { // 默认显示 "邹佳余"
    super();
    const loader = new FontLoader();
    loader.load(
      "fonts/simhei.typeface.json", // 确保字体路径正确
      (font) => {
        this.geometry = new TextGeometry(text, {
          font: font,
          size: 1, // 字体大小
          height: 0.2, // 厚度
          curveSegments: 20, // 曲线分段数
          bevelEnabled: true, // 启用斜角
          bevelThickness: 0.001, // 减小斜角厚度
          bevelSize: 0.001, // 减小斜角大小
          bevelSegments: 3, // 保持斜角平滑度
        });

        this.material = new THREE.MeshBasicMaterial({
          color: 0xff0000, // 红色
        });

        this.onLoad(); // 调用加载完成后的回调
      },
      undefined,
      (err) => {
        console.error("字体加载失败:", err);
      }
    );
  }

  onLoad() {
    console.log("TextPrimitive loaded successfully!");
  }
}
