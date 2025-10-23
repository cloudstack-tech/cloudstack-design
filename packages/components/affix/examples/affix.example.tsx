"use client";

import React, {useState} from "react";
import {Affix} from "@cloudstack-design/affix";

export default function AffixExample() {
  const [affixed, setAffixed] = useState(false);

  return (
    <div style={{height: "200vh", padding: "20px"}}>
      <div style={{marginBottom: "600px"}}>
        <h1>Affix Example</h1>
        <p>向下滚动查看固定效果</p>
        <p>当前状态: {affixed ? "已固定" : "未固定"}</p>
      </div>

      <Affix offsetTop={20} variant="shadow" onChange={setAffixed}>
        <div
          style={{
            padding: "16px 32px",
            background: "#1677ff",
            color: "white",
            borderRadius: "8px",
            fontWeight: "500",
          }}
        >
          这是一个固定的导航栏
        </div>
      </Affix>

      <div style={{marginTop: "100vh", padding: "20px", background: "#f0f2f5"}}>
        <h2>页面内容</h2>
        <p>继续向下滚动...</p>
      </div>
    </div>
  );
}
