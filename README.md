# 桔梗紫 · OneTHU 亮色主题包

> **非官方声明**：非官方社区创作，与清华大学无关，未经授权或认可。图形为自绘几何母题（工字厅「工」字形），不含校徽、不用校名标准字、不描摹二校门商标图形。

## 一、包信息

| 字段 | 值 |
| --- | --- |
| `manifest.id` / `theme.id` | `onethu.theme.jiegengzi` |
| `name` | 桔梗紫 |
| `version` | 1.0.0 |
| `author` | lotus0moon |
| `category` | `theme` |
| `permissions` | `[]`（空数组，不申请任何权限） |
| `dark` | `false`（浅色外观） |
| `description` | 紫白两色，纸面偏冷；品牌标识为自绘建筑轮廓。非官方创作，与清华大学无关。（36 字，上限 42） |
| `repo` | `https://github.com/lotus0moon/OneTHU-theme-jiegengzi`（仓库根即本目录，市场按仓库根找 `plugin.js`） |
| 入口文件 | `plugin.js`（4789B / 102 行，单文件 ES 模块，导出 `manifest` 与 `theme`） |

主题是纯声明式的：**没有激活函数**，不注册页面、不监听事件、无副作用。`plugin.js` 里只有三个数据段 —— `vars`（35 个令牌）、`logo`（一段 SVG 字符串）、`css`（4 条带作用域的规则）。

## 二、安装

见族说明 [../README.md](../README.md) 第二节。最快的一条：OneTHU → 插件页 → 插件市场 → 填入本包仓库地址（仓库根需有 `plugin.js`）；或直接把 `plugin.js` 全文粘进插件页的代码安装框。装好后在「设置 → 外观」中选择「桔梗紫」。

## 三、色板（`plugin.js:44-86`，35 项，逐字取自材料 `05-配色方案与色板.md` §8.1）

| 令牌 | 值 | 令牌 | 值 |
| --- | --- | --- | --- |
| `--bg` | `#f9f6fc` | `--text-1` | `#1a1721` |
| `--bg-soft` | `#f3eefa` | `--text-2` | `#4a4557` |
| `--surface` | `#ffffff` | `--text-3` | `#6e6880` |
| `--surface-2` | `#f7f3fb` | `--text-dim` | `#d8d0e2` |
| `--surface-3` | `#ece4f4` | `--primary` | `#660874` |
| `--skeleton` | `rgba(102,8,116,0.04)` | `--primary-hover` | `#4b1555` |
| `--skeleton-shine` | `rgba(255,255,255,0.6)` | `--on-primary` | `#ffffff` |
| `--border` | `rgba(102,8,116,0.12)` | `--accent` | `#892695` |
| `--border-soft` | `rgba(102,8,116,0.06)` | `--accent-soft` | `#fcdff8` |
| `--border-strong` | `#8a7f96` | `--accent-border` | `#e6a6e4` |
| `--red` / `--red-soft` | `#c2261f` / `#fdecec` | `--hover` | `rgba(102,8,116,0.06)` |
| `--amber` / `--amber-soft` | `#b45309` / `#fdf2e2` | `--active` | `rgba(102,8,116,0.10)` |
| `--green` / `--green-soft` | `#1b7f4b` / `#e6f9ee` | `--ring` | `0 0 0 3px rgba(102,8,116,0.55)` |
| `--shadow-1` | `0 2px 4px rgba(74,20,86,0.06)` | `--shadow-2` | `0 2px 8px rgba(74,20,86,0.05), 0 4px 12px rgba(74,20,86,0.03)` |
| `--shadow-3` | `0 0 1px rgba(74,20,86,0.18), 0 12px 32px rgba(74,20,86,0.1)` | `--r-sm/md/lg` | `4px` / `6px` / `10px` |

**色值来源**：`--primary #660874` 是公开校色（PANTONE 259C；颜色本身不受著作权保护），其余色阶为社区推导——本主题在官方紫的色相上向亮侧展开（强调色 `#892695` 相对官方紫提亮、色相略偏品红 323.2°），并非任何官方发布的色板。

**对比度（对背景面的实测值）**：`--text-1` 16.51:1、`--text-2` 8.60:1、`--text-3` 4.96:1、`--accent` 对白底 7.57:1、`--ring` 合成后对 `--bg` 3.40:1。完整 20 组表见 `reports/01-配色与对比度报告.md`，可用材料里的 `check-palette.mjs` 就地复算。

**为什么不撞车**：`--accent #892695` 色相 323.2°，与内置主题的强调色距离分别为 violet (`#7c3aed`) 30.2°、midnight (`#2563eb`) 60.3°、night (`#6b9bff`) 59.6°、默认 (`#4176e6`) 60.1°、warmsand (`#c2740a`) 101.2°、celadon 138.5°，均 > 20° 要求（`reports/01`）。

## 四、附加 CSS（`plugin.js:96-99`，4 条）

亮色主题只做「品牌签名」，不改任何布局：

```css
:root[data-theme="onethu.theme.jiegengzi"] .brand-logo-themed { color: var(--accent); }
:root[data-theme="onethu.theme.jiegengzi"] .brand-logo-themed svg { transition: color 100ms cubic-bezier(0.4, 0, 0.2, 1); }
:root[data-theme="onethu.theme.jiegengzi"] .nav-item.is-active { background: var(--accent-soft); color: var(--accent); }
:root[data-theme="onethu.theme.jiegengzi"] .nav-item.is-active svg { color: var(--accent); }
```

- 前两条把品牌标识染成强调色（`.brand-logo-themed` 由 `apps/desktop/src/components/Layout.tsx:53-57` 挂在 logo 容器上，是主题唯一的图形着色钩子）。
- 后两条让侧栏选中项用浅紫底 + 强调色字，替代默认的 `--surface-3` 灰底（默认规则见 `global.css:96-101`）。
- 每条规则都以 `:root[data-theme="onethu.theme.jiegengzi"]` 开头且恰好一次，未使用 `!important`，未出现任何布局属性，过渡只用 100ms（与全局动效一致）。

## 五、logo

`logo/logo.svg`（187B）与 `plugin.js:91` 的字符串逐字一致：

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" aria-hidden="true"><path d="M4 6H20V9H4ZM10 6H14V18H10ZM4 15H20V18H4Z"/></svg>
```

「工」字形：上下两横各长 16（各 16×3）、中间一竖宽 4 高 12（`04` §4 第 157 行给的就是「上下两横各长 16、中间一竖高 12、全直角、左右对称、path 1 条含 3 段子路径」，本图逐项照做）；1 条 path / 3 个同向填充子路径 / 12 个锚点；包络 `[4,6]–[20,18]` 落在 2..22 安全区；最细笔画在 16px 下仍为 2px。`preview/` 里有 16/24/32/48 四档 × 单色/反白/1-bit/1-bit 反白四态的渲染结果（`node tools/tristate-sheet.mjs` 生成）。换用其它母题的步骤见 `reports/03-logo设计与验证报告.md` §5（备选在 `logo/alternatives/`）。

## 六、自检

```bash
(cd .. && bash tools/run-all-checks.sh)   # 全量 19 条命令，退出码 0 = 全通过（含只读哈希自断言）
node test.mjs                              # 本包骨架自检：113 通过 / 0 失败
```

`test.mjs` 派生自材料 `skeleton/test.mjs`（TOKENS 白名单 52 项、REQUIRED 12 项、对比度双档阈值），未改判据，只按本包内容填入期望值。

## 七、已知取舍

- `--text-3` 对 `--surface-3` 4.29:1、对 `--accent-soft` 4.31:1，未达 4.5:1 软目标（高于 3:1 硬门槛）。要达标需把 `--text-3` 压暗一档，会让三级文字与二级文字的层次变扁。
- 圆角 `4/6/10px` 与材料 `02` §7④ 的示例不同，原因见 `reports/05-文档与源码差异清单.md` D-2。
- 未做真机走查（环境无桌面端），详情见 `reports/04-验证报告.md` §6。
- 亮色 `--primary` 是材料指定的官方紫 `#660874`，对内置紫水晶的 ΔH 为 29.0°（对 `#7c3aed` 28.6°），低于 `02` §7.1① 的 30° 量级；该线针对强调色，本主题 `--accent #892695` 对紫水晶 30.2–30.6° 达标。改 `--primary` 会违反「主按钮用官方紫」，故不改（复核意见 S8，见 `reports/06` §5.2）。
- `repo` 已指向本主题的发布仓库 `https://github.com/lotus0moon/OneTHU-theme-jiegengzi`（仓库根即有 `plugin.js`，2026-10-02 已发布）；若把两个主题放同一个仓库，请按「单仓库 + 子目录」填写（见根 `README.md` §二），两种形态已由 `node tools/check-install.mjs` 验证。
