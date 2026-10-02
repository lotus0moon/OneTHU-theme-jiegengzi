/**
 * 桔梗紫 —— OneTHU 亮色主题插件（非官方创作，与清华大学无关）
 *
 * 单文件 ES 模块：`manifest.category === "theme"` + `export const theme`。
 * 能力只有三样（边界契约见 OneTHU 仓库 docs/plugin-development.md §3.4）：
 *   ① `vars`  覆盖 OneTHU `packages/ui/src/tokens.css` 的设计令牌（52 项白名单内，本主题覆盖 35 项）
 *   ② `logo`  inline SVG，viewBox 24×24，currentColor 跟随主题色
 *   ③ `css`   附加 CSS，每条规则以 `:root[data-theme="<id>"]` 开头，只改颜色/背景/阴影/描边
 * 主题插件不申请任何权限，没有激活函数。
 *
 * 配色依据：清华紫官方标准色 PANTONE 259C（#660874，社区推导值，来源见
 * `onethu-unofficial-thu-theme/05-配色方案与色板.md` §1）；14 阶色板取
 * `--primary` 第 850 阶、`--accent` 第 700 阶、`--accent-border` 第 300 阶。
 * 与内置「紫水晶」（#6d28d9 / #7c3aed）的色相差 ≥ 28.6°，避让要求为 ≥ 20°。
 */

const THEME_ID = "onethu.theme.jiegengzi";
const THEME_NAME = "桔梗紫";
const THEME_VERSION = "1.0.0";
/* 38 字以内、陈述句、含非官方声明；禁用比喻/口语/第一第二人称 */
const DESCRIPTION = "紫白两色，纸面偏冷；品牌标识为自绘建筑轮廓。非官方创作，与清华大学无关。";
/* 本主题的发布仓库（仓库根目录即存放本文件，市场按仓库根找 plugin.js） */
const REPO = "https://github.com/lotus0moon/OneTHU-theme-jiegengzi";

export const manifest = {
  id: THEME_ID,
  name: THEME_NAME,
  version: THEME_VERSION,
  author: "lotus0moon",
  category: "theme",
  description: DESCRIPTION,
  repo: REPO,
  permissions: [],
};

export const theme = {
  id: THEME_ID,
  name: THEME_NAME,
  version: THEME_VERSION,
  author: "lotus0moon",
  description: DESCRIPTION,
  /* 亮色主题：不设 dark，applyTheme 因此不写 color-scheme: dark */
  dark: false,

  vars: {
    /* 面与骨架屏 */
    "--bg": "#f9f6fc",
    "--bg-soft": "#f3eefa",
    "--surface": "#ffffff",
    "--surface-2": "#f7f3fb",
    "--surface-3": "#ece4f4",
    "--skeleton": "rgba(102, 8, 116, 0.04)",
    "--skeleton-shine": "rgba(255, 255, 255, 0.6)",
    /* 线：装饰用 --border / --border-soft，控件用 --border-strong */
    "--border": "rgba(102, 8, 116, 0.12)",
    "--border-soft": "rgba(102, 8, 116, 0.06)",
    "--border-strong": "#8a7f96",
    /* 文字：--text-1 对 --bg 16.51:1，--text-2 8.60:1，--text-3 4.96:1 */
    "--text-1": "#1a1721",
    "--text-2": "#4a4557",
    "--text-3": "#6e6880",
    "--text-dim": "#d8d0e2",
    /* 品牌与强调：官方紫 PANTONE 259C；--accent 取第 700 阶，对白底 7.57:1 */
    "--primary": "#660874",
    "--primary-hover": "#4b1555",
    "--on-primary": "#ffffff",
    "--accent": "#892695",
    "--accent-soft": "#fcdff8",
    "--accent-border": "#e6a6e4",
    /* 功能色、交互态、焦点环（实心 3px，对 --bg 3.40:1）、带紫色相的阴影、收紧一档的圆角 */
    "--red": "#c2261f",
    "--red-soft": "#fdecec",
    "--amber": "#b45309",
    "--amber-soft": "#fdf2e2",
    "--green": "#1b7f4b",
    "--green-soft": "#e6f9ee",
    "--hover": "rgba(102, 8, 116, 0.06)",
    "--active": "rgba(102, 8, 116, 0.10)",
    "--ring": "0 0 0 3px rgba(102, 8, 116, 0.55)",
    "--shadow-1": "0 2px 4px rgba(74, 20, 86, 0.06)",
    "--shadow-2": "0 2px 8px rgba(74, 20, 86, 0.05), 0 4px 12px rgba(74, 20, 86, 0.03)",
    "--shadow-3": "0 0 1px rgba(74, 20, 86, 0.18), 0 12px 32px rgba(74, 20, 86, 0.1)",
    "--r-sm": "4px",
    "--r-md": "6px",
    "--r-lg": "10px",
  },

  /* 品牌标识：工字厅「工」字形几何，1 条 path / 3 个填充子路径 / 12 个锚点，
   * 参数逐项照 04 §4 母题速查第 157 行：上下两横各长 16、中间一竖高 12、全直角；
   * 尺寸用 width/height 属性给出，避免在附加 CSS 里写布局属性。颜色由下面的
   * `.brand-logo-themed` 规则给出。 */
  logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" aria-hidden="true"><path d="M4 6H20V9H4ZM10 6H14V18H10ZM4 15H20V18H4Z"/></svg>`,

  /* 附加 CSS：4 条规则，每条各带一次 `:root[data-theme="…"]` 前缀。
   * 只改颜色与过渡时长，不写 padding/margin/height/width/display/position。 */
  css: `
:root[data-theme="${THEME_ID}"] .brand-logo-themed { color: var(--accent); }
:root[data-theme="${THEME_ID}"] .brand-logo-themed svg { transition: color 100ms cubic-bezier(0.4, 0, 0.2, 1); }
:root[data-theme="${THEME_ID}"] .nav-item.is-active { background: var(--accent-soft); color: var(--accent); }
:root[data-theme="${THEME_ID}"] .nav-item.is-active svg { color: var(--accent); }
`,
};
