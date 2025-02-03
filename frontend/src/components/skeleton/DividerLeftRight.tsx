import type React from "react";
import { useState, useRef, useEffect, type ReactNode } from "react";

interface ResizablePanelsProps {
  // 要求 children 为包含两个 ReactNode 的元组
  children: [ReactNode, ReactNode];
}

/**
 * 拖拽条组件
 * 接受 onMouseDown 属性，用于触发拖拽逻辑
 */
type DividerProps = {
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function DividerLeftRight({ onMouseDown }: DividerProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        width: "5px",
        backgroundColor: "#ccc",
        cursor: "ew-resize",
        userSelect: "none",
      }}
    >
      {/* 这里可以添加图标或其它内容 */}
    </div>
  );
}

/**
 * 整个左右拖拽面板的容器组件
 * 包含左侧面板、拖拽条和右侧面板
 */
function ResizablePanels({ children }: ResizablePanelsProps) {
  // 从 children 数组中解构出两个 ReactNode
  const [left, right] = children;

  // 初始左侧面板宽度为 300px
  const [leftWidth, setLeftWidth] = useState<number>(200);
  // 拖拽状态
  const [isDragging, setIsDragging] = useState<boolean>(false);
  // 容器引用，用于计算鼠标相对于容器的位置
  const containerRef = useRef<HTMLDivElement>(null);

  // 定义左右两侧面板的最小宽度
  const minLeft = 100;
  const minRight = 100;

  // 拖拽条鼠标按下时，开启拖拽状态
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      // 获取容器的边界信息
      const containerRect = containerRef.current.getBoundingClientRect();
      // 计算鼠标相对于容器左边界的距离，作为新的左侧面板宽度
      let newLeftWidth = e.clientX - containerRect.left;

      // 限制左侧面板最小宽度
      if (newLeftWidth < minLeft) {
        newLeftWidth = minLeft;
      }
      // 同时保证右侧面板至少有 minRight 的宽度
      if (containerRect.width - newLeftWidth < minRight) {
        newLeftWidth = containerRect.width - minRight;
      }

      setLeftWidth(newLeftWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // 当正在拖拽时，监听全局的 mousemove 和 mouseup 事件
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    // 清除事件监听，防止内存泄漏
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        width: "100%",
        height: "100%", // 全屏高度
        overflow: "hidden",
      }}
    >
      {/* 左侧面板，根据 leftWidth 改变宽度 */}
      <div
        style={{
          width: leftWidth,
          minWidth: minLeft,
          backgroundColor: "#f0f0f0",
          boxSizing: "border-box",
        }}
      >
        {left}
      </div>

      {/* 拖拽条 */}
      <DividerLeftRight onMouseDown={handleMouseDown} />

      {/* 右侧面板，使用 flex 占据剩余空间 */}
      <div
        style={{
          flex: 1,
          minWidth: minRight,
          backgroundColor: "#e0e0e0",
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {right}
      </div>
    </div>
  );
}

export default ResizablePanels;
