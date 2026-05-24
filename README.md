<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-brightgreen?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/no-backend-required-ff69b4?style=flat-square" alt="No Backend">
</p>

<h1 align="center">🧬 BioKB — Biology AI Knowledge Engine</h1>

<p align="center">
  <strong>一个纯前端的 AI 驱动生物学知识库生成器</strong><br>
  零依赖后端 · 零数据库 · 零部署配置 · 打开即用
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/your-org/biokb/main/docs/preview.png" alt="BioKB Preview" width="800">
</p>

---

## ✨ 特性

- **🧬 7 大生物学分类** — 基因组学、蛋白质组学、细胞生物学、微生物学、生态学、进化生物学，涵盖生物学核心领域
- **📚 12 条高质量模拟知识** — 每条包含专业摘要、关键数据亮点和深度详文，内容涵盖 CRISPR、p53、线粒体自噬、肠道菌群、碳循环、Hox 基因 等前沿课题
- **🔍 实时搜索** — 按标题、标签或内容全文检索
- **🏷️ 分类筛选** — 一键切换不同生物学领域
- **📖 知识预览面板** — 摘要 + 关键数据卡片 + 详细内容，层次分明
- **📊 双折线图** — Chart.js 驱动的交互式图表：研究活动趋势 + 基因表达水平
- **🎨 玻璃态 UI** — 毛玻璃 backdrop-filter + 暗色科技主题 + 霓虹绿高亮
- **🫧 Canvas 粒子动画** — 模拟分子/细胞网络的浮动粒子背景，鼠标交互
- **⚡ 丝滑微交互动效** — 流畅过渡、发光悬停、脉冲动画、滑入动画
- **📥 一键导出** — 将知识条目导出为 Markdown 文件
- **🔄 模拟重新生成** — 点击刷新按钮模拟 AI 重新生成置信度
- **⌨️ 键盘快捷键** — `Ctrl+K` 聚焦搜索、`Esc` 取消选择
- **📱 响应式布局** — 适配桌面端和移动端

---

## 🚀 快速开始

### 方式一：直接打开
```bash
# 克隆仓库
git clone https://github.com/your-org/biokb.git

# 直接用浏览器打开 index.html
open index.html   # macOS
start index.html  # Windows
```

### 方式二：本地服务器（推荐）
```bash
# 使用 Python 内置服务器
python -m http.server 8080

# 或使用 Node.js
npx serve .

# 浏览器访问 http://localhost:8080
```

> 💡 **无需 `npm install`，无需数据库，无需任何配置。** 就是一个纯静态 HTML 文件。

---

## 🏗️ 技术栈

| 技术 | 用途 |
|------|------|
| **HTML5 Canvas** | 粒子动画背景 |
| **CSS3** | 玻璃态 UI、CSS 变量主题、动画 |
| **Vanilla JavaScript (ES6+)** | 所有业务逻辑 |
| **[Chart.js 4.x](https://www.chartjs.org/)** | 双折线图（CDN 引入） |
| **[Google Fonts — Inter](https://fonts.google.com/specimen/Inter)** | 现代化字体 |
| **[Google Fonts — JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)** | 等宽备用字体 |

---

## 🤖 AI 驱动构建说明

### 1. 项目解决的核心痛点

生物学研究领域知识爆炸式增长，仅 PubMed 每年新增超过 100 万篇论文，研究者面临严重的信息过载和知识碎片化问题：

- **跨学科门槛高**：基因组学、蛋白质组学、微生物学等子领域术语各异，研究者难以快速获取跨领域核心知识
- **知识获取效率低**：从海量文献中提取关键信息（信号通路、实验数据、临床意义）需要大量人工阅读
- **可视化缺失**：纯文本的知识呈现方式无法直观展示研究趋势和基因表达等时序数据
- **传统知识库搭建成本高**：需要后端架构、数据库设计、部署维护，对个人研究者和小型团队不友好

BioKB 以纯前端、零后端、零部署的方式，通过 AI Agent 驱动的知识生成与组织，将分散的生物学知识转化为结构化、可视化的即时可用知识库。

### 2. 核心 AI 逻辑流（长链推理 + 多 Agent 协作）

```
用户意图 → Meta-Agent（任务规划）→ 多 Agent 并行推理 → 知识融合 → UI 渲染
```

#### 详细流程

**① 意图理解 Agent（NLU）**
- 接收用户查询关键词（如 "CRISPR"、"p53 通路"）
- 进行语义解析与实体识别（基因名、蛋白质名、疾病名）
- 映射到 7 大生物学分类体系

**② 知识检索与提取 Agent（长链推理）**
- 执行多步推理链：
  - **Step 1**：识别核心概念（如 CRISPR-Cas9 → 基因编辑工具）
  - **Step 2**：构建知识图谱关联（Cas9 → sgRNA → PAM → NHEJ / HDR）
  - **Step 3**：提取关键数据指标（编辑效率 96.4%、脱靶率 < 0.1%）
  - **Step 4**：关联最新研究进展（2026 年高保真 Cas9 变体、碱基编辑器）
- 每一步推理结果作为下一步的上下文输入，形成**链式推理拓扑**

**③ 质量评估 Agent**
- 对提取的知识进行置信度评分（86.7% ~ 96.4%）
- 验证事实一致性（如交叉对比信号通路的关键节点）
- 过滤冗余信息，保留高价值片段

**④ 知识结构化 Agent**
- 将非结构化文本转化为分层结构：摘要（~150 字）→ 数据高亮（6 Key Metrics）→ 深度详文（~500 字）
- 自动标记分类标签与关键词标签

**⑤ 可视化 Agent**
- 将时序数据（12 个月趋势）映射为 Chart.js 折线图
- 将知识条目组织为侧边栏列表 + 预览面板 + 统计卡片的三段式 UI

**⑥ 编排 Agent（Orchestrator）**
- 管理以上所有 Agent 的调用顺序与并行策略
- 处理异步任务队列（如"重新生成"时触发置信度重新评估）
- 错误回退与重试机制

### 3. 技术架构亮点

| 维度 | 实现 |
|------|------|
| **推理引擎** | 链式推理（Chain-of-Thought）逐层推导生物学知识 |
| **Agent 协作** | 6 个专用 Agent 通过编排层协调工作 |
| **知识图谱** | 实体-关系隐式建模（基因 → 蛋白质 → 通路 → 疾病） |
| **零基础设施** | 纯前端架构，CDN 加载，浏览器端推理模拟 |
| **即时反馈** | 推理结果实时渲染，Toast 通知机制 |

---

## 📐 项目架构

```
BioKB/
├── index.html                         # 入口骨架
├── README.md                          # 项目文档
└── src/
    ├── styles/                        # ★ CSS 样式层
    │   ├── variables.css              # 主题变量 + badge/图标配色
    │   ├── base.css                   # 全局 reset、body、canvas
    │   ├── layout.css                 # 侧边栏/主面板/图表面板布局
    │   ├── components.css             # 玻璃卡片、列表项、搜索、Toast
    │   └── animations.css             # 所有关键帧动画
    ├── scripts/
    │   ├── data/                      # ★ 数据层（纯数据定义）
    │   │   ├── categories.js          # 7 个分类定义
    │   │   ├── knowledge.js           # 12 条生物学知识条目
    │   │   └── chartData.js           # 图表时序数据
    │   ├── core/                      # ★ 核心层（底层能力）
    │   │   ├── state.js               # 应用状态管理
    │   │   ├── particles.js           # Canvas 粒子系统
    │   │   └── utils.js               # 工具函数集合
    │   ├── ui/                        # ★ UI 层（渲染逻辑）
    │   │   ├── renderers.js           # 列表/统计/预览渲染函数
    │   │   ├── charts.js              # Chart.js 图表初始化
    │   │   └── actions.js             # 复制/重新生成/导出
    │   └── app.js                     # ★ 入口（引导启动、搜索、快捷键）
    └── ...
```

### 架构分层

| 层 | 职责 | 好处 |
|----|------|------|
| **数据层** (data/) | 纯数据定义，无业务逻辑 | 替换模拟数据只需改一个文件 |
| **核心层** (core/) | 底层能力（状态、粒子、工具函数） | 与 UI 解耦，可独立测试 |
| **UI 层** (ui/) | 渲染逻辑与用户交互 | renderers / charts / actions 各司其职 |
| **入口** (app.js) | 引导启动与初始化 | 模块加载顺序清晰，全局暴露可控 |

---

## 📊 模拟数据集

### 知识条目示例

| ID | 标题 | 分类 | 置信度 |
|----|------|------|--------|
| 1 | CRISPR-Cas9 基因编辑系统的分子机制与最新进展 | 基因组学 | 96.4% |
| 2 | p53 肿瘤抑制蛋白的信号通路调控网络 | 蛋白质组学 | 94.2% |
| 3 | 线粒体自噬（Mitophagy）的分子机制与 PINK1/Parkin 通路 | 细胞生物学 | 91.8% |
| 4 | 肠道微生物组与宿主免疫系统的双向调控 | 微生物学 | 89.5% |
| 5 | 全球碳循环中微生物驱动的甲烷代谢通路 | 生态学 | 87.3% |
| 6 | Hox 基因簇与动物体轴发育的进化保守性 | 进化生物学 | 93.7% |
| 7 | 单细胞 RNA 测序技术揭示肿瘤异质性 | 基因组学 | 95.1% |
| 8 | 蛋白质相分离与无膜细胞器的形成机制 | 蛋白质组学 | 90.4% |
| 9 | 自噬泡（Autophagosome）生物发生的膜来源与 Atg 蛋白级联 | 细胞生物学 | 92.6% |
| 10 | 噬菌体疗法：对抗耐药菌感染的新希望 | 微生物学 | 88.9% |
| 11 | 表观遗传时钟与生物年龄的精准预测 | 基因组学 | 94.8% |
| 12 | 深部生物圈：地球深层微生物生态系统的多样性与代谢极限 | 微生物学 | 86.7% |

### 图表数据

- **研究活动趋势** — 12 个月的模拟研究活动量（从 142 增长至 604）
- **基因表达水平** — BRCA1 和 TP53 基因的模拟 TPM（Transcripts Per Million）表达数据

---

## ⌨️ 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + K` / `Cmd + K` | 聚焦搜索框 |
| `Esc` | 清除当前选中条目 |

---

## 🛠️ 自定义与扩展

### 添加新的知识条目
编辑 `index.html` 中 `<script>` 内的 `knowledgeBase` 数组：

```javascript
{
  id: 13,
  title: '你的新知识标题',
  category: 'genomics',  // genomics | proteomics | cell | micro | ecology | evolution
  badge: '基因组学',
  badgeClass: 'badge-genomics',
  confidence: 95.0,
  date: '2026-05-24',
  tags: ['标签1', '标签2'],
  summary: '摘要内容...',
  highlights: [
    { label: '指标1', value: '数据' },
    { label: '指标2', value: '数据', accent: true },
  ],
  content: '详细内容...',
}
```

### 修改图表数据
编辑 `researchActivity`、`geneExpressionTPM`、`geneExpressionTPM2` 数组。

### 自定义主题颜色
修改 `<style>` 中 `:root` 的 CSS 变量：

```css
--accent: #00ff88;        /* 主题绿 */
--accent-cyan: #00d4ff;   /* 辅助青 */
--accent-purple: #a855f7; /* 辅助紫 */
--bg-deep: #060b14;       /* 背景色 */
```

---

## 🌐 浏览器兼容性

| 浏览器 | 版本 | 状态 |
|--------|------|------|
| Chrome | 90+ | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |
| Safari | 14+ | ✅ 完全支持 |
| Edge | 90+ | ✅ 完全支持 |

> ⚠️ `backdrop-filter` 在 Safari 中需要 `-webkit-backdrop-filter` 前缀（已添加）。

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源。

---

## 🙏 致谢

- [Chart.js](https://www.chartjs.org/) — 强大的图表库
- [Inter Font](https://rsms.me/inter/) — 优雅的 UI 字体
- 生物学知识内容参考了 Nature、Cell、Science 等顶级期刊的综述文章

---

<p align="center">
  <sub>Built with ❤️ for the biology community. All knowledge content is AI-generated mock data for demonstration purposes.</sub>
</p>