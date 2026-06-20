# 帮组文档

## 规则

**文件放到 `public/docs/{页面名}/{参数值}.pdf`，页面自动显示。**

没参数时文件名用 `index`。支持 `pdf`、`docx`、`txt`。

不加文件就显示 404，告诉你缺了哪个文件、放哪里。

---

## 加载流程

```
public/docs/{页面}/{参数}.pdf   → 有就显示 PDF
public/docs/{页面}/{参数}.docx  → 有就显示 Word
public/docs/{页面}/{参数}.txt   → 有就显示文本
都没有                          → 显示 404，提示缺了哪个文件
```

`pdf` > `docx` > `txt`，找到第一个就停。

---

## 文件放哪

| URL | 文件（都放 `public/docs/` 下） |
|-----|---------------------------|
| `/summary` | `summary/index.pdf` |
| `/summary?section=intro` | `summary/intro.pdf` |
| `/summary?section=problem` | `summary/problem.pdf` |
| `/summary?section=innovation` | `summary/innovation.pdf` |
| `/summary?section=effect` | `summary/effect.pdf` |
| `/summary?section=awards` | `summary/awards.pdf` |
| `/recommend` | `recommend/index.pdf` |
| `/effect` | `effect/index.pdf` |
| `/effect?tab=overview` | `effect/overview.pdf` |
| `/effect?tab=awards` | `effect/awards.pdf` |
| `/effect?tab=employment` | `effect/employment.pdf` |
| `/promotion` | `promotion/index.pdf` |
| `/promotion?tab=all` | `promotion/all.pdf` |
| `/promotion?tab=u0` ~ `u6` | `promotion/u0.pdf` ~ `u6.pdf` |
| `/media` | `media/index.pdf` |
| `/media?filter=all` | `media/all.pdf` |
| `/media?filter=national` | `media/national.pdf` |
| `/media?filter=province` | `media/province.pdf` |
| `/media?filter=online` | `media/online.pdf` |
| `/media?filter=platform` | `media/platform.pdf` |
| `/international` | `international/index.pdf` |
| `/international?tab=cert` | `international/cert.pdf` |
| `/international?tab=coop` | `international/coop.pdf` |
| `/international?tab=training` | `international/training.pdf` |
| `/international?tab=overview` | `international/overview.pdf` |
| `/evidence` | `evidence/index.pdf` |
| `/evidence/toc` | `evidence/toc.pdf` |
| `/evidence/effect-proof` | `evidence/effect-proof.pdf` |
| `/evidence/awards` | `evidence/awards.pdf` |
| `/evidence/papers` | `evidence/papers.pdf` |
| `/evidence/books` | `evidence/books.pdf` |
| `/evidence/media` | `evidence/media.pdf` |
| `/` | `home/index.pdf` |
| `/?section=baize` | `home/baize.pdf` |
| `/?section=redBrand` | `home/redBrand.pdf` |
| `/?section=teaching` | `home/teaching.pdf` |
| `/?section=problem` | `home/problem.pdf` |
| `/?section=innovation` | `home/innovation.pdf` |
| `/?section=people` | `home/people.pdf` |
| `/?section=organization` | `home/organization.pdf` |

---

## 目录结构

```
public/
├── docs/
│   ├── home/              ← 首页
│   ├── summary/           ← 总结报告
│   ├── recommend/         ← 推荐书
│   ├── effect/            ← 培养成效
│   ├── promotion/         ← 推广应用
│   ├── media/             ← 媒体报道
│   ├── international/     ← 国际认可
│   └── evidence/          ← 其他佐证
└── images/
    ├── awards-result/
    └── awards-student/
```
