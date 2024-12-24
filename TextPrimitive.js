import { Mesh, TextGeometry, THREE, FontLoader } from "./AppImport.js";

export default class TextPrimitive extends Mesh {
  constructor(text) {
    super();

    // 使用 FontLoader 加载支持中文的字体文件
    const loader = new FontLoader();
    loader.load(
      "simhei.typeface.json", // 确保字体文件路径正确
      (font) => {
        // 创建文字几何体
        this.geometry = new TextGeometry(text, {
          font: font, // 加载的字体
          size: 1, // 字体大小
          height: 0.2, // 厚度
          curveSegments: 12, // 平滑度
          bevelEnabled: true, // 启用斜角
          bevelThickness: 0.03, // 斜角厚度
          bevelSize: 0.02, // 斜角大小
          bevelSegments: 3, // 斜角分段数
        });

        // 设置材质
        this.material = new THREE.MeshBasicMaterial({
          color: 0xff0000, // 设置文字颜色
        });

        // 调用加载完成后的回调
        this.onLoad();
      },
      undefined, // 可选：进度回调（这里忽略）
      (err) => {
        console.error("字体加载失败：", err); // 处理字体加载错误
      }
    );
  }

  // 加载完成后的回调（可以被实例化后重写）
  onLoad() {
    console.log("TextPrimitive loaded");
  }
}