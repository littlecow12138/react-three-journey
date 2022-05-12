import React from "react";
import "./index.css";

const Catalog1 = (props) => {
  const contentList = [
    {
      index: "01",
      desc: "Canvas组件",
      url: "https://www.yuque.com/littlecow-tuoen/ry380f/kbezso#:~:text=Level%20Scene%20Walkthrough-,%E5%8C%85%E8%A3%B9%E7%9A%84Canvas,-%E9%A6%96%E5%85%88%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87",
    },
    {
      index: "02",
      desc: "GLTF模型文件导入",
      url: "https://www.yuque.com/littlecow-tuoen/ry380f/kbezso#:~:text=%E7%9A%84%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7-,%E5%A6%82%E4%BD%95%E5%AF%BC%E5%85%A5%E6%AF%8F%E4%B8%80%E5%B1%82%E7%9A%84%E5%9C%BA%E6%99%AF,-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%8F%90%E4%BE%9B",
    },
    {
      index: "03",
      desc: "React Spring动画的使用",
    },
    {
      index: "04",
      desc: "Shader的理解",
    },
  ];

  //   show corresponding content
  const handleContentClick = (item) => {
    props.openContent(item);
  };

  return (
    <div className="catelog">
      <span className="title00">01</span>
      <span className="title01">目录</span>
      <div className="content">
        {contentList &&
          contentList.map((item, index) => {
            return (
              <div
                key={index}
                className="catalogItem"
                onClick={() => handleContentClick(item)}
              >
                <span className="index">{item.index}</span>
                <span className="desc">{item.desc}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Catalog1;
