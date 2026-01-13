
// Theme Integration - Matches Web App (Tailwind Palette)
#let color-primary = rgb("#003459") // Deep Blue
#let color-primary-dark = rgb("#001f36")
#let color-primary-faded = color-primary.lighten(80%) // approx primary/20

// Neutral Colors (Tailwind Slate)
#let color-slate-50 = rgb("#f8fafc")
#let color-slate-100 = rgb("#f1f5f9")
#let color-slate-200 = rgb("#e2e8f0")
#let color-slate-400 = rgb("#94a3b8")
#let color-slate-600 = rgb("#475569")
#let color-slate-700 = rgb("#334155")
#let color-slate-800 = rgb("#1e293b")
#let color-slate-900 = rgb("#0f172a")

// Semantic Colors
#let color-red-50 = rgb("#fef2f2")
#let color-red-100 = rgb("#fee2e2")
#let color-red-700 = rgb("#b91c1c")
#let color-red-800 = rgb("#991b1b")

#let color-blue-50 = rgb("#eff6ff")   // Used for LawCard background
#let color-blue-100 = rgb("#dbeafe") // Restored for Part 1 compatibility
#let color-blue-200 = rgb("#bfdbfe")

// Fonts
#let font-main = ("PingFang SC", "Heiti SC", "Source Han Sans TC", "Noto Sans TC", "Arial", "sans-serif")

// Icons - using Lucide SVG paths for exact visual matching
#let icon-info = image.decode("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#003459' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><line x1='12' y1='16' x2='12' y2='12'/><line x1='12' y1='8' x2='12.01' y2='8'/></svg>")

#let icon-law = image.decode("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M14 13l-7.5-7.5c-1.5-1.5-3.5-1-4.5 0s-1.5 3 0 4.5L9.5 17.5'/><path d='M16 11l3.5-3.5c1.5-1.5 1-3.5 0-4.5s-3-1.5-4.5 0L11.5 6.5'/><path d='M17.5 19c2 2 4.5 1 4.5-1s-1.5-4-3.5-6'/><path d='M2 21h20'/></svg>")

#let icon-trap = image.decode("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#991b1b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'/><line x1='12' y1='9' x2='12' y2='13'/><line x1='12' y1='17' x2='12.01' y2='17'/></svg>")

#let icon-exam = image.decode("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#003459' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='6'/><circle cx='12' cy='12' r='2'/></svg>")

// Main Project Template
#let project(title: "", authors: (), body) = {
  set document(author: authors, title: title)
  
  // Page Setup
  set page(
    paper: "a4",
    margin: (top: 2.5cm, bottom: 2.5cm, x: 2cm),
    header: context {
      let page-num = counter(page).get().first()
      if page-num > 1 {
        set text(size: 9pt, fill: color-slate-400, font: font-main)
        align(right)[Page #page-num]
      }
    },
    footer: align(center)[
         #text(size: 8pt, fill: color-slate-400, font: font-main)[© FOCO - EAQE Case Study Guide]
    ]
  )

  // Typography Setup
  set text(font: font-main, size: 10.5pt, fill: color-slate-800) // Match web text-slate-800
  set par(justify: true, leading: 1em)
  
  // Table styling
  show table: t => {
    show table.cell.where(y: 0): set text(weight: "bold", fill: color-primary)
    set table(
      stroke: 0.5pt + color-slate-200,
      fill: (x, y) => if y == 0 { color-slate-50 } else { white }
    )
    t
  }

  // Heading Styling
  // H1 = Section Header
  show heading.where(level: 1): it => {
    pagebreak(weak: true)
    v(2em)
    block(
      width: 100%, 
      below: 1.5em, 
      stroke: (bottom: 2pt + color-primary-faded) // Match web border-b-2 border-primary/20
    )[
      #pad(bottom: 0.5em)[
        #text(size: 22pt, weight: "bold", fill: color-primary, font: font-main, it.body)
      ]
    ]
  }
  
  // H2 = SubSection Header
  show heading.where(level: 2): it => {
    v(1.5em)
    block(below: 1em)[
      #stack(dir: ltr, spacing: 0.5em)[
        // Match web: w-1.5 h-6 bg-primary rounded-full
        #box(width: 0.3em, height: 1.2em, fill: color-primary, radius: 100%)
        #text(size: 14pt, weight: "bold", fill: color-primary, font: font-main, it.body)
      ]
    ]
  }

  show heading.where(level: 3): it => {
    v(1em)
    text(size: 11pt, weight: "bold", fill: color-primary-dark, font: font-main, it.body)
    v(0.5em)
  }
  
  // Cover Page
  align(center + horizon)[
    #text(size: 40pt, weight: "black", fill: color-primary, font: font-main)[#title]
    #v(1em)
    #text(size: 18pt, fill: color-slate-600, font: font-main)[
      地產代理資格考試 (EAQE)
      \
      案例題深度攻略
    ]
    #v(4em)
    #text(fill: color-slate-400)[
      #datetime.today().display("[year] / [month] / [day]")
    ]
  ]
  pagebreak()

  body
}

// UI Components - Matches React Components

#let section-header(title, subtitle: none, icon: none) = {
  heading(level: 1, title)
  if subtitle != none {
    pad(top: -1em, bottom: 2em)[
      #text(size: 12pt, fill: color-slate-600, subtitle) // text-slate-600
    ]
  }
}

#let sub-section-header(title) = {
  heading(level: 2, title)
}

// Exact match to UI.tsx styling
// rounded-lg => radius: 8pt
// border => stroke: 1pt + color
// p-5 => inset: 1.25em

#let info-card(title, body) = {
  block(
    width: 100%,
    fill: white, // bg-white
    radius: 6pt, // rounded-lg
    stroke: 1pt + color-slate-200, // border-slate-200
    inset: 16pt, // p-5/p-6
    below: 1.5em,
    breakable: false
  )[
    #stack(dir: ltr, spacing: 0.5em)[
        // Note: Web UI doesn't necessarily show icon in InfoCard unless customized, but previously I added it. 
        // Based on UI.tsx: InfoCard has simple title.
        #text(size: 11pt, weight: "bold", fill: color-slate-800, title)
    ]
    #v(0.5em)
    #text(size: 10pt, fill: color-slate-700, body)
  ]
}

#let law-card(title: "法律與規例依據", body) = {
  block(
    width: 100%,
    fill: color-slate-50, // bg-slate-50
    radius: 6pt,
    stroke: 1pt + color-slate-200, // border-slate-200
    inset: 14pt,
    below: 1.5em,
    breakable: false
  )[
    #stack(dir: ltr, spacing: 0.5em)[
        #box(baseline: 20%, icon-law)
        #text(size: 10.5pt, weight: "bold", fill: color-slate-800, title)
    ]
    #v(0.4em)
    #text(size: 10pt, fill: color-slate-600, body)
  ]
}

#let trap-card(body) = {
  block(
    width: 100%,
    fill: color-red-50, // bg-red-50
    radius: 6pt,
    stroke: 1pt + color-red-100, // border-red-100
    inset: 14pt,
    below: 1.5em,
    breakable: false
  )[
    #stack(dir: ltr, spacing: 0.5em)[
        #box(baseline: 20%, icon-trap)
        #text(size: 10.5pt, weight: "bold", fill: color-red-800, "常見陷阱與案例題眼")
    ]
    #v(0.4em)
    #text(size: 10pt, fill: color-red-700, body)
  ]
}

#let exam-point(number, title, body) = {
  block(width: 100%, below: 1.5em)[
    #text(size: 10.5pt, weight: "bold", fill: color-primary-dark)[考點#number：#title]
    #v(0.3em)
    #text(size: 10pt, fill: color-slate-700, body)
  ]
}

#let list-item(body) = {
  pad(left: 0.5em, top: 0.2em, bottom: 0.2em)[
    #grid(
      columns: (1.2em, 1fr),
      align: (top, left),
      text(fill: color-slate-800, [•]), // Standard bullet
      text(fill: color-slate-700, body)
    )
  ]
}
