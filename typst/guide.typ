
#import "template.typ": *

#show: project.with(
  title: "EAQE Case Study Typst 排版指南",
  authors: ("ZHONGOLi",),
)

= 組件展示

== 標題 (Section Header)

#section-header(
  "第一部分：考綱解讀",
  subtitle: "深入解析考試模式與核心考點對照"
)

== 子標題 (Sub Section Header)

#sub-section-header("一、案例題的基本考試模式")

== 信息卡片 (Info Card)

#info-card("題型定位")[
  案例題屬於考試第二部分，以個案分析形式命題，需綜合運用知識解決實際問題。
  
  #list-item[地產代理資格考試 (EAQE)：共50題。]
  #list-item[地產營業員資格考試 (SQE)：共50題。]
]

== 法律卡片 (Law Card)

#law-card(title: "法律依據")[
  #list-item[《地產代理條例》]
  #list-item[《建築物條例》]
]

== 陷阱卡片 (Trap Card)

#trap-card[
  常見陷阱：未能區分不同條例的適用範圍。
]

== 考點 (Exam Point)

#exam-point(1, "關鍵文件的使用")[
  正確填寫和解釋訂明地產代理協議（表格3-6）。
]
