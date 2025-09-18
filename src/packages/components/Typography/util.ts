import React from "react";

/**
 * 检查是否为有效的文本节点
 */
export function isValidText(text: any): text is string | number {
  return typeof text === "string" || typeof text === "number";
}

/**
 * 检查元素是否发生了省略
 */
export function isEleEllipsis(element: HTMLElement): boolean {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

/**
 * 获取节点列表的总长度
 */
export function getNodesLen(nodeList: React.ReactNode[]): number {
  return nodeList.reduce<number>((totalLen, node) => {
    return totalLen + (isValidText(node) ? String(node).length : 1);
  }, 0);
}

/**
 * 根据长度截取节点列表
 */
export function sliceNodes(
  nodeList: React.ReactNode[],
  len: number
): React.ReactNode[] {
  let currLen = 0;
  const currentNodeList: React.ReactNode[] = [];

  for (let i = 0; i < nodeList.length; i += 1) {
    // 如果已经达到目标长度，直接返回
    if (currLen === len) {
      return currentNodeList;
    }

    const node = nodeList[i];
    const canCut = isValidText(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;

    // 如果下一个节点会超出长度限制，需要截断
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }

    currentNodeList.push(node);
    currLen = nextLen;
  }

  return nodeList;
}

/**
 * 检查浏览器是否支持某个 CSS 属性
 */
export function isStyleSupport(property: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const testElement = document.createElement("div");
  const prefixes = ["", "-webkit-", "-moz-", "-ms-", "-o-"];

  return prefixes.some((prefix) => {
    const prop = prefix + property;
    return prop in testElement.style;
  });
}
